import { stack } from "../app.js";

function exibirArray() {
  const meuArray = document.getElementById("meuArray");
  meuArray.innerHTML = "";
  const elementos = [...stack.stack];

  for (let i = elementos.length - 1; i >= 0; i--) {
    const novoQuadro = criarDiv(elementos[i]);
    meuArray.appendChild(novoQuadro);
  }
}

function criarDiv(valor) {
  const novaDiv = document.createElement("div");
  novaDiv.className = `min-w-10 text-black bg-blue-300 shadow-md rounded m-4 p-1`;
  const texto = document.createElement("h1");
  texto.className = "text-center";
  texto.innerText = valor;

  novaDiv.appendChild(texto);
  return novaDiv;
}

export {
  criarDiv,
  exibirArray
}