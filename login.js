var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

if (username == "admin" && password == "daddy123") {
  alert("Login successful!");
  // Redirect to the secure page or perform other actions
} else {
  alert("Incorrect username or password. Please try again.");
}
