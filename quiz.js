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
        this.perguntaAtual++;
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
                this.pontos++;
            } else {
                this.mostrarInformacao("errada")
        }
            console.log(this.pontos)

        }
        if(this.perguntaAtual === 2) {
            letra.classList.add("esconder")
            finalizado.classList.add("finalizado")
            console.log(this.pontos)
            if(this.pontos === 0) {
            finalizado.innerText =  this.perguntas[3].ponto0
            } else if (this.pontos === 1) {
            finalizado.innerText =  this.perguntas[3].ponto1
            } else if(this.pontos === 4) {
            finalizado.innerText =  this.perguntas[3].ponto2
            } else if(this.pontos === 7) {
            finalizado.innerText =  this.perguntas[3].ponto3
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



