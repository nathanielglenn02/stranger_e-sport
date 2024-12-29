<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

$servername = "localhost";
$username = "hybrid_160822004";
$password = "ubaya";
$dbname = "hybrid_160822004";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die(json_encode(array('result' => 'ERROR', 'message' => 'Connection failed: ' . $conn->connect_error)));
}

$data = json_decode(file_get_contents("php://input"), true);
$username = $data['username'] ?? '';
$password = $data['password'] ?? '';

if (empty($username) || empty($password)) {
    echo json_encode(array('result' => 'ERROR', 'message' => 'Username or Password is empty'));
    die();
}

$sql = "SELECT * FROM member WHERE username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($row = $result->fetch_assoc()) {
    if (password_verify($password, $row['password'])) {
        unset($row['password']);
        echo json_encode(array('result' => 'OK', 'data' => $row, 'message' => 'Login berhasil'));
    } else {
        echo json_encode(array('result' => 'ERROR', 'message' => 'Password salah'));
    }
} else {
    echo json_encode(array('result' => 'ERROR', 'message' => 'Username tidak ditemukan'));
}

$conn->close();
