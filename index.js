// manipular os elementos do DOM, fazer a lógica do jogo (qdo apertar a próxima pergunta, reações do usuário)
const novoQuiz = new Quiz 
console.log(novoQuiz);
console.log(novoQuiz.imprimirPergunta().alternativas[0]);


console.log(novoQuiz.perguntaAtual);
console.log(novoQuiz.proximaPergunta());
console.log(novoQuiz.perguntaAtual);
console.log(novoQuiz.imprimirPergunta());


let pergunta = document.getElementById("pergunta");
let op1 = document.getElementById("op1");
let op2 = document.getElementById("op2");
let op3 = document.getElementById("op3");
let info = document.getElementById("info");
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

/* for (let i = 0; i < alt.length; i++) {
   = novoQuiz.imprimirPergunta().alternativa[i];
   alt[i].value = i;
}

console.log(alt); */ // meus inputs

//for (let i = 0; i <alt.length; i++) {
// alt[i] = novoQuiz.imprimirPergunta().alternativa[i];
//opcao[i].value = i; */

/* alt.addEventListener("click", () => {
// Fazer um for e olhar todas as opções
for (let i = 0; i < novoQuiz.imprimirPergunta().alternativa[i].length; i++) {
// Verificar se o que o usuário marcou é a resposta certa
// Primeiro, precisamos saber o que foi q ele marcou
if (novoQuiz.imprimirPergunta().alternativa[i].checked) {
if (novoQuiz.imprimirPergunta().alternativa[i].value === perguntas[perguntaAtual].respostaCorreta) {
alert("Você acertou");
} else {
alert("Você errou");
}
}
}
}); */
