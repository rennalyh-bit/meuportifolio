
const cepInput = document.getElementById("cep");
const form = document.getElementById("form");

 
cepInput.addEventListener("blur", () => {
  const cep = cepInput.value.replace(/\D/g, "");

  if (cep.length !== 8) {
    alert("CEP inválido!");
    return;
  }

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(dados => {
      if (dados.erro) {
        alert("CEP não encontrado!");
        return;
      }

      document.getElementById("rua").value = dados.logradouro || "";
      document.getElementById("bairro").value = dados.bairro || "";
      document.getElementById("cidade").value = dados.localidade || "";
      document.getElementById("estado").value = dados.uf || "";
    })
    .catch(() => {
      alert("Erro ao buscar CEP!");
    });
});


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const dados = {
    nome: document.getElementById("nome").value,
    cep: document.getElementById("cep").value,
    rua: document.getElementById("rua").value,
    bairro: document.getElementById("bairro").value,
    cidade: document.getElementById("cidade").value,
    estado: document.getElementById("estado").value
  };

  localStorage.setItem("usuario", JSON.stringify(dados));

  alert("Dados salvos com sucesso!");
});

 // salvar dadoss
window.addEventListener("load", () => {
  const dadosSalvos = localStorage.getItem("usuario");

  if (dadosSalvos) {
    const dados = JSON.parse(dadosSalvos);

    document.getElementById("nome").value = dados.nome || "";
    document.getElementById("cep").value = dados.cep || "";
    document.getElementById("rua").value = dados.rua || "";
    document.getElementById("bairro").value = dados.bairro || "";
    document.getElementById("cidade").value = dados.cidade || "";
    document.getElementById("estado").value = dados.estado || "";
  }

  
const btnLimpar = document.getElementById("limpar");

btnLimpar.addEventListener("click", () => {
  // limpa os campo
  document.getElementById("nome").value = "";
  document.getElementById("cep").value = "";
  document.getElementById("rua").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("estado").value = "";

  // remover dados
  localStorage.removeItem("usuario");

  alert("Dados apagados!");
});





});