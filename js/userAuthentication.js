var email = localStorage.getItem("email");
if (email === null) {
  location.replace("login.html");
}
