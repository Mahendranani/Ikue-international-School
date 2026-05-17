<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Content-Type: application/json");

$host = "localhost";
$user = "u398080210_ikue";
$pass = "Y^p6SHL4l";
$db   = "u398080210_ikue";

$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "Database connection failed"]);
    exit();
}

// Get POST data
$student_name = $_POST['studentName'] ?? '';
$grade = $_POST['grade'] ?? '';
$phone = $_POST['phone'] ?? '';

// Validate
if (!$student_name || !$grade || !$phone) {
    echo json_encode(["status" => "error", "message" => "All fields are required"]);
    exit();
}

// Insert query
$stmt = $conn->prepare("INSERT INTO enquiries (student_name, grade, phone) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $student_name, $grade, $phone);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "Enquiry saved"]);
} else {
    echo json_encode(["status" => "error", "message" => "Failed to save"]);
}

$stmt->close();
$conn->close();
?>