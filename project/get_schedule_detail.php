<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

// Koneksi ke database
$servername = "localhost";
$username = "hybrid_160822004";
$password = "ubaya";
$dbname = "hybrid_160822004";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Membaca input JSON dari php://input
$idevent = isset($_POST['idevent']) ? intval($_POST['idevent']) : 0;
error_log("ID Event diterima: " . $idevent); // Log ID event yang diterima

if ($idevent <= 0) {
    echo json_encode(array('result' => 'ERROR', 'message' => 'Event ID is required and must be numeric.'));
    die();
}

// Query untuk mengambil detail event
$sql = "SELECT * FROM event WHERE idevent = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $idevent);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $data = $result->fetch_assoc();
    echo json_encode(array('result' => 'OK', 'data' => $data));
} else {
    echo json_encode(array('result' => 'ERROR', 'message' => 'Event not found.'));
}

$conn->close();