let numeroSecreto;
let tentativas;
const maxTentativas = 10;

const input = document.getElementById("palpite");
const mensagem = document.getElementById("mensagem");
const tentativasTexto = document.getElementById("tentativas");
const btnChutar = document.getElementById("btnChutar");
const btnReset = document.getElementById("btnReset");

// inicia o jogo
function iniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  tentativas = maxTentativas;
  mensagem.innerText = "";
  tentativasTexto.innerText = "Tentativas: " + tentativas;
  input.disabled = false;
}

btnChutar.addEventListener("click", function () {
  let palpite = parseInt(input.value);

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    mensagem.innerText = "Digite um número válido!";
    return;
  }

  tentativas--;

  if (palpite === numeroSecreto) {
    mensagem.innerText = "🎉 Você acertou!";
    input.disabled = true;
  } 
  else if (palpite < numeroSecreto) {
    mensagem.innerText = "É maior!";
  } 
  else {
    mensagem.innerText = "É menor!";
  }

  tentativasTexto.innerText = "Tentativas: " + tentativas;

  if (tentativas === 0 && palpite !== numeroSecreto) {
    mensagem.innerText = "❌ Perdeu! Era " + numeroSecreto;
    input.disabled = true;
  }

  input.value = "";
});

btnReset.addEventListener("click", iniciarJogo);

// inicia automaticamente
iniciarJogo();