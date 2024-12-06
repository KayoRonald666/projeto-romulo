import { exibirConteudo } from "./create-element.js";
import LinkedStack from "./pilha.js";

document.getElementById("verificarForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const stack = new LinkedStack();
  const expressao = document.getElementById("expressao").value;

  const validarExpresap = () => {
    for (let index = 0; index < expressao.length; index++) {
      const element = expressao[index];
      if (element === "(" || element === "{" || element === "[") {
        console.log(element);
        stack.push(element);
      }
      if (element === ")" || element === "}" || element === "]") {
        if (stack.isEmpty()) {
          return false;
        }
        stack.pop();
      }
    }
    console.log(stack.isEmpty());
    return stack.isEmpty();
  };

  if(validarExpresap()){
    exibirConteudo("Expressão balanceado");
  }else{
    exibirConteudo("Expressão não Balanceado")
  }
});
