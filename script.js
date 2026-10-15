const btn = document.getElementById("btn");
const hex = document.getElementById("hex");

function gerarCor() {
  const caracteres = "0123456789ABCDEF";
  let cor = "#";
  for (let i = 0; i < 6; i++) {
    cor += caracteres[Math.floor(Math.random() * 16)];
  }
  return cor;
}

btn.addEventListener("click", () => {
  const novaCor = gerarCor();
  document.body.style.backgroundColor = novaCor;
  hex.textContent = novaCor;
});