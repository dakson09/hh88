function checkPassword() {
  var password = document.getElementById("password").value;
  if (password == "daddy123") {
    // Redirect to the desired page
    window.location.href = "index.html";
  } else {
    alert("Incorrect password. Please try again.");
  }
}
