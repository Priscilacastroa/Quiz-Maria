//Só class, regras do jogo, aqui deixo tudo preparado

class Quiz {
    constructor (){
        this.perguntas = [...todasPerguntas] //copiando essa array e transformando nessa variável
        this.perguntaAtual = 0
        this.pontos = 0
    }

    imprimirPergunta() {
      return this.perguntas[this.perguntaAtual];
    }

    proximaPergunta() {
        this.perguntaAtual+= 1;
    }

  //comparar a escolha dos jogadores com a resposta certa
    checarResposta(escolhaJogador) {
        if(this.perguntas[this.perguntaAtual].respostaCorreta === escolhaJogador);
          
    
    }
     
    validarPergunta() {
        let options = document.querySelectorAll("input[type=radio]");
        let optionEscolhido = ""
        for (let i = 0; i < options.length; i++) {
           if(options[i].checked){
               optionEscolhido = this.perguntas[this.perguntaAtual].alternativas[i];
            }
            if(optionEscolhido === this.perguntas[this.perguntaAtual].respostaCorreta) {
                console.log("acertou") 
                this.mostrarInformacao("correta")
            } else {
             console.log("errou")
                this.mostrarInformacao("errada")
        }

        }
        
    }

    mostrarInformacao(informacao) {
        let info = document.getElementById("info");
        if(informacao === "correta") {
         info.innerText = this.perguntas[this.perguntaAtual].informacaoAcerto;
        }else {
        info.innerText = this.perguntas[this.perguntaAtual].informacaoErro;
        }
    }

}



