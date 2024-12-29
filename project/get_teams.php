<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

// Database Credentials
$servername = "localhost";
$username = "hybrid_160822004";
$password = "ubaya";
$dbname = "hybrid_160822004";

// Koneksi ke database
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die(json_encode(array('result' => 'ERROR', 'message' => 'Connection failed: ' . $conn->connect_error)));
}

// Ambil data JSON dari body request
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, true);

// Ambil idgame dari JSON
$idgame = $input['idgame'] ?? '';

if (!is_numeric($idgame) || $idgame == '') {
    echo json_encode(array('result' => 'ERROR', 'message' => 'Game ID is required and must be numeric.'));
    die();
}

// Query untuk mengambil data team
$sql = "SELECT idteam, name, imgPath FROM team WHERE idgame = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $idgame);

// Eksekusi query
if ($stmt->execute()) {
    $result = $stmt->get_result();
    $data = array();

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        echo json_encode(array('result' => 'OK', 'data' => $data));
    } else {
        echo json_encode(array('result' => 'ERROR', 'message' => 'No teams found.'));
    }
} else {
    echo json_encode(array('result' => 'ERROR', 'message' => 'Query failed.'));
}

// Tutup koneksi
$stmt->close();
$conn->close();
