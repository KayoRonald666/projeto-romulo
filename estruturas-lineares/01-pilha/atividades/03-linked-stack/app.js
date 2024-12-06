import { criarDiv,exibirArray } from "./js/create-elements.js";
import { stack } from "./js/stack.js";

exibirArray()

function executarPush(){
  const valorDoInput = document.getElementById("valorDoMeuStack").value
	stack.push(valorDoInput)
  exibirArray()
}

function executarPop(){
  stack.pop()

  exibirArray()
}

function executarPeek(){
	console.log(stack.top)
  document.getElementById("minhaPilha").innerHTML = "";
  console.log(stack.peek())
  const novoQuadro = criarDiv(stack.peek() || "Pilha vazia")
  document.getElementById("minhaPilha").appendChild(novoQuadro)
}

function executarisEmpty(){
  document.getElementById("minhaPilha").innerHTML = "";
  console.log(stack.isEmpty())
  const novoQuadro = criarDiv(stack.isEmpty())
  document.getElementById("minhaPilha").appendChild(novoQuadro)
}

function executarSize(){
  document.getElementById("minhaPilha").innerHTML = "";
  const novoQuadro = criarDiv(stack.size())
  document.getElementById("minhaPilha").appendChild(novoQuadro)
}

document.getElementById("executarPush").addEventListener("click", executarPush)
document.getElementById("executarPeek").addEventListener("click", executarPeek)
document.getElementById("executarSize").addEventListener("click", executarSize)
document.getElementById("executarisEmpty").addEventListener("click", executarisEmpty)
document.getElementById("executarPop").addEventListener("click", executarPop)