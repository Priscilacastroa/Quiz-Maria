// manipular os elementos do DOM, fazer a lógica do jogo (qdo apertar a próxima pergunta, reações do usuário)
const novoQuiz = new Quiz 


function proxPergunta() {
  novoQuiz.proximaPergunta();
}


let pergunta = document.getElementById("pergunta");
let op1 = document.getElementById("op1");
let op2 = document.getElementById("op2");
let op3 = document.getElementById("op3");

let radio = document.getElementsByClassName("radio")
let alt = document.getElementsByClassName("alt")
const botao = document.getElementsByClassName("botao")
let botao_proximo = document.getElementById("botao_proximo")
let letra = document.getElementById("letra")
let totalPontos = document.getElementById("totalPontos")
let finalizado = document.getElementById("finalizado")
mostrarPergunta();


function mostrarPergunta() {
pergunta.innerText = novoQuiz.imprimirPergunta().pergunta;

op1.innerText = novoQuiz.imprimirPergunta().alternativas[0];
op2.innerText = novoQuiz.imprimirPergunta().alternativas[1];
op3.innerText = novoQuiz.imprimirPergunta().alternativas[2];
}


//capturei o id="info" do arquivo 
let informacao = document.getElementById("info");
//capturei o radio
let inputRadio = document.querySelectorAll("input[type=radio]");

botao[0].innerText = "Confirmar";

function proxPergunta() {
novoQuiz.proximaPergunta()
mostrarPergunta()
limpar()
if(novoQuiz.perguntaAtual === 2) {
  botao_proximo.classList.add("esconder")
}
}


function limpar() {
  informacao.innerText = " "
  inputRadio[0].checked = false
  inputRadio[1].checked = false
  inputRadio[2].checked = false
}






