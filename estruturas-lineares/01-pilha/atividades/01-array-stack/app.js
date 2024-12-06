import { criarDiv, exibirArray } from "./js/create-elements.js";
import { isEmpty, peek, pop, push, size, stack } from "./js/stack-array.js";


exibirArray();  

document.getElementById("executarPush").addEventListener("click", () => {
  const valor = document.getElementById("valorDoMeuStack").value
  if(valor){
    push(valor)
    exibirArray();
  }
});

document.getElementById("executarPop").addEventListener("click", () => {
  pop();
  exibirArray();
});

document.getElementById("executarPeek").addEventListener("click", () => {
  const valor = peek();
  const minhaPilha = document.getElementById("minhaPilha");
  minhaPilha.innerHTML = "";
  const novoQuadro = criarDiv(valor);
  minhaPilha.appendChild(novoQuadro);
});

document.getElementById("executarisEmpty").addEventListener("click", () => {
  const minhaPilha = document.getElementById("minhaPilha");
  minhaPilha.innerHTML = "";
  const novoQuadro = criarDiv(isEmpty());
  minhaPilha.appendChild(novoQuadro);
});

document.getElementById("executarSize").addEventListener("click", () => {
  const minhaPilha = document.getElementById("minhaPilha");
  minhaPilha.innerHTML = "";
  const novoQuadro = criarDiv(size());
  minhaPilha.appendChild(novoQuadro);
});
