<?php
  session_start();

  $username = $_POST["username"];
  $password = $_POST["password"];

  if ($username == "admin" && $password == "daddy") {
    $_SESSION["logged_in"] = true;
    header("Location: index.html");
  } else {
    echo "Incorrect username or password. Please try again.";
  }
?>
