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

$sql = "SELECT idgame, name, description, imgPath FROM game";
$result = $conn->query($sql);

$data = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode(array("result" => "OK", "data" => $data));
} else {
    echo json_encode(array("result" => "ERROR", "message" => "No data found"));
}

$conn->close();
