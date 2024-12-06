function criarDiv(valor) {
  const novaDiv = document.createElement("div");
  novaDiv.className = `min-w-10 text-black bg-blue-300 shadow-md rounded m-4 p-1`;
  const texto = document.createElement("h1");
  texto.className = "text-center";
  texto.innerText = valor;

  novaDiv.appendChild(texto);
  return novaDiv;
}

function exibirConteudo(value) {
  const meuResultado = document.getElementById("meuResultado");
  meuResultado.innerHTML = "";
  const novoQuadro = criarDiv(value);
  meuResultado.appendChild(novoQuadro);
}

function exibirBalanceamento(value) {
  const meuArray = document.getElementById("meuArray");
  meuArray.innerHTML = "";
  const novoQuadro = criarDiv(value);
  meuArray.appendChild(novoQuadro);
}

export {
  criarDiv,
  exibirConteudo,
  exibirBalanceamento
}