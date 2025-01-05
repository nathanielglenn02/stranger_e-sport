<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

// Koneksi database
$servername = "localhost";
$username = "hybrid_160822004";
$password = "ubaya";
$dbname = "hybrid_160822004";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Ambil data POST
$fname = $_POST['fname'] ?? '';
$lname = $_POST['lname'] ?? '';
$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';
$profile = 'member';
$imgPath = 'assets/img/default.jpg';
$role = ''; // Kosongkan

// Validasi input
if ($fname == '' || $lname == '' || $username == '' || $password == '') {
    echo json_encode(['result' => 'ERROR', 'message' => 'Semua kolom harus diisi']);
    die();
}

// Cek apakah username sudah ada
$checkUserSql = "SELECT * FROM member WHERE username = ?";
$checkStmt = $conn->prepare($checkUserSql);
$checkStmt->bind_param("s", $username);
$checkStmt->execute();
$checkResult = $checkStmt->get_result();

if ($checkResult->num_rows > 0) {
    echo json_encode(['result' => 'ERROR', 'message' => 'Username sudah digunakan']);
    die();
}

// Hash password
$hashedPassword = password_hash($password, PASSWORD_BCRYPT);

// Query insert data
$sql = "INSERT INTO member (fname, lname, username, password, profile, imgPath, role) 
        VALUES (?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssss", $fname, $lname, $username, $hashedPassword, $profile, $imgPath, $role);

if ($stmt->execute()) {
    echo json_encode(['result' => 'OK', 'message' => 'Registrasi berhasil']);
} else {
    echo json_encode(['result' => 'ERROR', 'message' => 'Registrasi gagal']);
}

$conn->close();