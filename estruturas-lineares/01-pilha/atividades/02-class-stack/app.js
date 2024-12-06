import { criarDiv, exibirArray } from "./js/create-elements.js";
import { Stack } from "./js/stack-class.js";

export const stack = new Stack();


exibirArray();

document.getElementById("executarPush").addEventListener("click", () => {
  const valor = document.getElementById("valorDoMeuStack").value;
  if (valor) {
    stack.push(valor);
    exibirArray();
  }
});

document.getElementById("executarPop").addEventListener("click", () => {
  stack.pop();
  exibirArray();
});

document.getElementById("executarPeek").addEventListener("click", () => {
  const minhaPilha = document.getElementById("minhaPilha");
  minhaPilha.innerHTML = "";
  const novoQuadro = criarDiv(stack.peek() || "Pilha vazia");
  minhaPilha.appendChild(novoQuadro);
});

document.getElementById("executarisEmpty").addEventListener("click", () => {
  const minhaPilha = document.getElementById("minhaPilha");
  minhaPilha.innerHTML = "";
  const novoQuadro = criarDiv(stack.isEmpty());
  minhaPilha.appendChild(novoQuadro);
});

document.getElementById("executarSize").addEventListener("click", () => {
  const minhaPilha = document.getElementById("minhaPilha");
  minhaPilha.innerHTML = "";
  const novoQuadro = criarDiv(stack.size());
  minhaPilha.appendChild(novoQuadro);
});