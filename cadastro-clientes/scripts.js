const form = document.getElementById("form");
const lista = document.getElementById("listaClientes");

const API = "https://jsonplaceholder.typicode.com/users";


function listarClientes() {
  fetch(API)
    .then(res => res.json())
    .then(dados => {
      lista.innerHTML = "";

      dados.slice(0, 5).forEach(cliente => { 
        criarItem(cliente);
      });
    });
}


function criarItem(cliente) {
  const li = document.createElement("li");
  li.innerHTML = `
    ${cliente.name} - ${cliente.email}
    <button onclick="excluirCliente(${cliente.id})">Excluir</button>
  `;
  lista.appendChild(li);
}


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: nome,
      email: email
    })
  })
    .then(res => res.json())
    .then(cliente => {
      criarItem(cliente);
      form.reset();
    });
});

// 
function excluirCliente(id) {
  fetch(`${API}/${id}`, {
    method: "DELETE"
  })
    .then(() => {
      alert("Cliente removido!");
      listarClientes();
    });
}


listarClientes();