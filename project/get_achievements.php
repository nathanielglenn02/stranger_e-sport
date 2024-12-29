<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

// Database Credentials
$servername = "localhost";
$username = "hybrid_160822004";
$password = "ubaya";
$dbname = "hybrid_160822004";

// Buat koneksi database
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die(json_encode(array('result' => 'ERROR', 'message' => 'Connection failed: ' . $conn->connect_error)));
}

// Ambil parameter idgame dari POST (bukan GET)
$data = json_decode(file_get_contents("php://input"), true); // Ambil JSON POST
$idgame = $data['idgame'] ?? '';

// Validasi idgame
if (!is_numeric($idgame) || $idgame == '') {
    echo json_encode(array('result' => 'ERROR', 'message' => 'Game ID is required and must be numeric.'));
    die();
}

// Query untuk mendapatkan data achievement berdasarkan idgame
$sql = "
SELECT 
    achievement.name AS title, 
    YEAR(achievement.date) AS year, 
    team.name AS team,
    game.imgPath AS imgPath
FROM 
    achievement 
INNER JOIN 
    team ON achievement.idteam = team.idteam
INNER JOIN
    game ON team.idgame = game.idgame
WHERE 
    team.idgame = ?
ORDER BY 
    achievement.date DESC";

$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $idgame);

// Eksekusi query
if ($stmt->execute()) {
    $result = $stmt->get_result();
    $data = array();

    // Ambil hasil data
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        echo json_encode(array("result" => "OK", "data" => $data));
    } else {
        echo json_encode(array("result" => "ERROR", "message" => "No achievements found"));
    }
} else {
    echo json_encode(array("result" => "ERROR", "message" => "Query failed"));
}

// Tutup koneksi
$stmt->close();
$conn->close();