import { stack } from "./stack.js";

function criarDiv(valor) {
  const novaDiv = document.createElement("div");
  novaDiv.className = `min-w-10 text-black bg-blue-300 shadow-md rounded m-4 p-1`;
  const texto = document.createElement("h1");
  texto.className = "text-center";
  texto.innerText = valor;

  novaDiv.appendChild(texto);
  return novaDiv;
}

function exibirArray() {
  const meuArray = document.getElementById("meuArray");
  meuArray.innerHTML = "";
  let top = stack.top;
  while (top !== null) {
    const novoQuadro = criarDiv(top.value);
    meuArray.appendChild(novoQuadro);
    top = top.prev;
  }
}

export {
  criarDiv,
  exibirArray
}