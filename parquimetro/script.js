class Parquimetro {
  constructor(valor) {
    this.valor = valor;
  }

  calcular() {
    if (isNaN(this.valor)) {
      return { erro: "Digite um valor!" };
    }

    if (this.valor < 1) {
      return { erro: "Valor insuficiente!" };
    }

    if (this.valor < 1.75) {
      return {
        tempo: 30,
        troco: (this.valor - 1).toFixed(2)
      };
    }

    if (this.valor < 3) {
      return {
        tempo: 60,
        troco: (this.valor - 1.75).toFixed(2)
      };
    }

    return {
      tempo: 120,
      troco: (this.valor - 3).toFixed(2)
    };
  }
}

// ELEMENTOS
const btn = document.getElementById("btnCalcular");
const reset = document.getElementById("btnReset");

const display = document.getElementById("displayMsg");
const tempo = document.getElementById("tempo");
const troco = document.getElementById("troco");

// EVENTO CALCULAR
btn.addEventListener("click", () => {
  const valor = parseFloat(document.getElementById("valor").value);

  const p = new Parquimetro(valor);
  const res = p.calcular();

  tempo.innerText = "";
  troco.innerText = "";

  if (res.erro) {
    display.innerText = res.erro;
    display.style.color = "red";
    return;
  }

  display.innerText = "Ticket gerado!";
  display.style.color = "#0ff";

  tempo.innerText = "Tempo: " + res.tempo + " minutos";
  troco.innerText = "Troco: R$ " + res.troco;
});

// RESET
reset.addEventListener("click", () => {
  document.getElementById("valor").value = "";
  tempo.innerText = "";
  troco.innerText = "";
  display.innerText = "Insira o valor";
});