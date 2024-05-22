import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarImagem(evento) {
  evento.preventDefault();

  const nome = document.querySelector("[data-nome]").value;
  const valor = document.querySelector("[data-valor]").value;
  const imagemInput = document.querySelector("[data-imagem]").files[0];

  const reader = new FileReader();
  reader.onloadend = async () => {
    const imagem = reader.result;
    await conectaApi.criaImagem(nome, valor, imagem);

    window.location.href = "../sucesso.html";
  };

  if (imagemInput) {
    reader.readAsDataURL(imagemInput);
  }
}

formulario.addEventListener("submit", criarImagem);

// Adiciona event listener para o botão "Limpar"
const btnLimpar = document.querySelector(".btns .btn:last-child");
btnLimpar.addEventListener("click", (evento) => {
  evento.preventDefault(); // Previne o comportamento padrão do botão
  // Seleciona os campos do formulário e limpa seus valores
  document.querySelector("[data-nome]").value = "";
  document.querySelector("[data-valor]").value = "";
  const imagemInput = document.querySelector("[data-imagem]");
  imagemInput.value = "";
  document.querySelector("#upload-label").textContent = "imagem..."; // Reseta o texto do label
});
