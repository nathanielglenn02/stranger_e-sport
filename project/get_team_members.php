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

$input = file_get_contents('php://input');
$data = json_decode($input, true);
$idteam = isset($data['idteam']) ? intval($data['idteam']) : 0;

if ($idteam <= 0) {
    echo json_encode(array('result' => 'ERROR', 'message' => 'Team ID is required and must be numeric.'));
    die();
}

$sqlTeam = "SELECT name, imgPath FROM team WHERE idteam = ?";
$stmtTeam = $conn->prepare($sqlTeam);
$stmtTeam->bind_param("i", $idteam);
$stmtTeam->execute();
$resultTeam = $stmtTeam->get_result();

if ($resultTeam->num_rows == 0) {
    echo json_encode(array('result' => 'ERROR', 'message' => 'Team not found.'));
    die();
}

$teamData = $resultTeam->fetch_assoc();
$sqlMembers = "SELECT m.idmember, m.fname, m.lname, m.username, m.profile, m.imgPath, m.role
               FROM member m
               JOIN team_members tm ON m.idmember = tm.idmember
               WHERE tm.idteam = ?";
$stmtMembers = $conn->prepare($sqlMembers);
$stmtMembers->bind_param("i", $idteam);
$stmtMembers->execute();
$resultMembers = $stmtMembers->get_result();

$members = [];
while ($row = $resultMembers->fetch_assoc()) {
    $members[] = $row;
}

echo json_encode(array(
    'result' => 'OK',
    'team' => $teamData,
    'members' => $members
));

$conn->close();
