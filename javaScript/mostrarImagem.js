import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");
const noProductsMessage = document.querySelector(".no-products-message");

function constroiCard(id, nome, valor, imagem) {
  const card = document.createElement("div");
  card.className = "card";
  card.setAttribute("data-id", id);
  card.innerHTML = `
    <img src="${imagem}" class="img" alt="imagem do produto">
    <div class="inf">
      <p class="produtoNome">${nome}</p>
      <div class="valor">
        <p>$ ${valor}</p>
        <img src="style/img/lixo.svg" alt="Ícono de excluir" data-delete>
      </div>
    </div>`;
  return card;
}

async function listaImagem() {
  const listaApi = await conectaApi.listaImagem();
  if (listaApi.length === 0) {
    noProductsMessage.style.display = "block";
  } else {
    noProductsMessage.style.display = "none";
    listaApi.forEach(elemento => {
      const card = constroiCard(elemento.id, elemento.nome, elemento.valor, elemento.imagem);
      lista.appendChild(card);
    });
    adicionarEventoDeletar();
  }
}

function adicionarEventoDeletar() {
  const deleteButtons = document.querySelectorAll("[data-delete]");
  deleteButtons.forEach(button => {
    button.addEventListener("click", async (event) => {
      const card = event.target.closest(".card");
      const id = card.getAttribute("data-id");
      try {
        await conectaApi.deletaImagem(id);
        card.remove();
        // Verifica se a lista está vazia após a remoção de um item
        if (lista.children.length === 0) {
          noProductsMessage.style.display = "block";
        }
      } catch (error) {
        console.error("Não foi possível deletar o produto:", error);
      }
    });
  });
}

listaImagem();
