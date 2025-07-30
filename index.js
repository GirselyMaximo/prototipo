function logar() {
  const usuario = document.getElementById("login").value;
  const senha = document.getElementById("senha").value;

  if (usuario === "admin" && senha === "123") {
    window.location.href = "home.html";
  } else {
    alert("Login inválido. Tente admin / 123");
  }
}
