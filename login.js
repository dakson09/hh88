function checkCredentials() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "admin" && password == "daddy") {
    // Redirect to the desired page
    window.location.href = "index.html";
  } else {
    alert("Incorrect username or password. Please try again.");
  }
}
