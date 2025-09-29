const loginForm = document.getElementById("loginForm");
const errorMsg = document.getElementById("error-msg");

const USER = "prueba";
const PASS = "2329";

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === USER && password === PASS) {
    window.location.href = "index.html";
  } else {
    errorMsg.textContent = "Usuario o contraseña incorrectos";
  }
});