// manipular os elementos do DOM, fazer a lógica do jogo (qdo apertar a próxima pergunta, reações do usuário)
const novoQuiz = new Quiz 

function proxPergunta() {
  console.log("teste");
  novoQuiz.proximaPergunta();
}


let pergunta = document.getElementById("pergunta");
let op1 = document.getElementById("op1");
let op2 = document.getElementById("op2");
let op3 = document.getElementById("op3");

let radio = document.getElementsByClassName("radio")
let alt = document.getElementsByClassName("alt")
const botao = document.getElementsByClassName("botao")



//function mostrarPergunta() {
pergunta.innerText = novoQuiz.imprimirPergunta().pergunta;

op1.innerText = novoQuiz.imprimirPergunta().alternativas[0];
op2.innerText = novoQuiz.imprimirPergunta().alternativas[1];
op3.innerText = novoQuiz.imprimirPergunta().alternativas[2];
//}


botao[0].innerText = "Confirmar";




