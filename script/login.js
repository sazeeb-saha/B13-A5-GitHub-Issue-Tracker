const logIn = document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputUserName = document.getElementById("input-username");
    const inputPassword = document.getElementById("input-password");
    if (inputUserName.value == "admin" && inputPassword.value == "admin123") {
      window.location.assign("./home.html");
    } else {
      alert("Invalid Username or Password");
      return;
    }
  });
