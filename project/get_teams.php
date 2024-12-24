<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$servername = "localhost";
$username = "hybrid_160822004";
$password = "ubaya";
$dbname = "hybrid_160822004";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$idgame = $_POST['idgame'] ?? '';

if ($idgame == '') {
    echo json_encode(array('result' => 'ERROR', 'message' => 'Game ID is required'));
    die();
}

$sql = "SELECT idteam, name FROM team WHERE idgame = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $idgame);
$stmt->execute();
$result = $stmt->get_result();

$data = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode(array("result" => "OK", "data" => $data));
} else {
    echo json_encode(array("result" => "ERROR", "message" => "No teams found"));
}

$conn->close();
