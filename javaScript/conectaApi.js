async function listaImagem() {
  const conexao = await fetch('http://localhost:3000/produtos');
  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}

async function criaImagem(nome, valor, imagem) {
  const conexao = await fetch("http://localhost:3000/produtos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nome: nome,
      valor: valor,
      imagem: imagem
    })
  });

  if (!conexao.ok) {
    throw new Error("Não foi possível criar o produto");
  }

  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}

async function deletaImagem(id) {
  const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
    method: "DELETE"
  });

  if (!conexao.ok) {
    throw new Error("Não foi possível deletar o produto");
  }
}

export const conectaApi = {
  listaImagem,
  criaImagem,
  deletaImagem
};
