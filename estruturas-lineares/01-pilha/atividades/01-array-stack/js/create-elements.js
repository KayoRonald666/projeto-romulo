import { stack } from "./stack-array.js";

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
  document.getElementById("meuArray").innerHTML = "";
  stack.map((valor) => {
    const novoQuadro = criarDiv(valor);
    document.getElementById("meuArray").appendChild(novoQuadro);
  });
  console.log(stack);
}

export {
  criarDiv,
  exibirArray
}