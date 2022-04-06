//Só class, regras do jogo, aqui deixo tudo preparado

class Quiz {
    constructor () {
        this.perguntas = [...todasPerguntas] //copiando essa array e transformando nessa variável
        this.perguntaAtual = 0
    }
  
    imprimirPergunta() {
    return this.perguntas[this.perguntaAtual];
    }

    proximaPergunta() {
    this.perguntaAtual++
    }

  //comparar a escolha dos jogadores com a resposta certa
    checarResposta(escolhaJogador) {
        if(this.perguntas[this.perguntaAtual].respostaCorreta === escolhaJogador);
    }
       

}

