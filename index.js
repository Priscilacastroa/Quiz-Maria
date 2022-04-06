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

pergunta.innerText = novoQuiz.imprimirPergunta().pergunta;
op1.innerText = novoQuiz.imprimirPergunta().alternativas[0];
op2.innerText = novoQuiz.imprimirPergunta().alternativas[1];
op3.innerText = novoQuiz.imprimirPergunta().alternativas[2];


console.log(pergunta);
console.log(op1);
console.log(op2);
console.log(op3);
console.log(info);

