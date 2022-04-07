//banco de dados, acesso esse arquivo p mostrar ao usuário

const todasPerguntas = [
    {
      pergunta: "Maria Eduarda foi estuprada quando saia de casa para trabalhar por volta das 5h da manhã de uma segunda-feira. Você faz ideia da média de estupros registrados no Brasil no ano de 2021?",
      alternativas: ["Um estupro a cada oito horas.", "Um estupro a cada duas horas.", "Um estupro a cada dez minutos.",],
      respostaCorreta: "Um estupro a cada dez minutos.",
      informacaoAcerto: "Você acertou. Infelizmente, a média em 2021 foi de 1 estupro a cada 10 minutos. Houve aumento de 3,7% em relação a 2020, segundo Fórum Brasileiro de Segurança Pública. Foram 56 mil casos, incluindo estupros de meninas menores de 14 anos, ou mulheres incapazes de consentir ou de oferecer resistência.",
      informacaoErro: "Você errou. Infelizmente, a média em 2021 foi de 1 estupro a cada 10 minutos. Houve aumento de 3,7% em relação a 2020, segundo Fórum Brasileiro de Segurança Pública. Foram 56 mil casos, incluindo estupros de meninas menores de 14 anos, ou mulheres incapazes de consentir ou de oferecer resistência.",
    },
    {
      pergunta: "Maria do Carmo entrou para o índice de feminicídio, foi morta a facadas por seu ex companheiro após ser vista com um novo namorado. Quantas mulheres você acredita que morreram em 2021 devido ao feminicídio?", 
      alternativas: ["Uma a cada seis horas e meia.", "Uma a cada nove horas e meia.", "Uma a cada quinze horas e meia.",],
      respostaCorreta: "Uma a cada seis horas e meia.",
      informacaoAcerto: "Você acertou. Infelizmente uma mulher morre a cada seis horas e meia. Três a cada quatro vítimas de feminicídio tinham entre 19 e 44 anos. A maioria (61,8%) era negra. Em geral, o agressor é uma pessoa conhecida: 81,5% dos assassinos eram companheiros ou ex-companheiros, enquanto 8,3% das mulheres foram mortas por outros parentes.",
      informacaoErro: "Você errou. Infelizmente uma mulher morre a cada seis horas e meia. Três a cada quatro vítimas de feminicídio tinham entre 19 e 44 anos. A maioria (61,8%) era negra. Em geral, o agressor é uma pessoa conhecida: 81,5% dos assassinos eram companheiros ou ex-companheiros, enquanto 8,3% das mulheres foram mortas por outros parentes.",

    },
    {
      pergunta: "Maria Clara, 12 anos, faltou a aula hoje, ela está menstruada e sua mãe mais vez teve que usar o pouco dinheiro que tinha com itens básicos de alimentação, mas mesmo assim, hoje ela não terão o que jantar. Você imagina qual o índice de adolescentes que não possui absorventes durante seu período menstrual?",
      alternativas: ["Uma a cada quatro adolescentes.", "Uma a cada dez adolescentes.", "Uma a cada vinte adolescentes."],
      respostaCorreta: "Uma a cada quatro adolescentes.",
      informacaoAcerto: "Você acertou. Infelizmente a pobreza menstrual existe. 713 mil meninas vivem sem acesso a banheiro ou chuveiro em seu domicílio. Outras 4 milhões não têm acesso a itens mínimos de cuidados menstruais nas escolas, como absorventes, sabonetes ou mesmo banheiro ou chuveiro em seu domicílio. Muitas acabam recorrendo ao uso de materiais inapropriados para conter o fluxo, como panos, restos de jornal, papel higiênico e até miolo de pão, aumentando o risco de doenças e infecções.",
      informacaoErro: "Você errou. infelizmente a pobreza menstrual existe. 713 mil meninas vivem sem acesso a banheiro ou chuveiro em seu domicílio. Outras 4 milhões não têm acesso a itens mínimos de cuidados menstruais nas escolas, como absorventes, sabonetes ou mesmo banheiro ou chuveiro em seu domicílio. Muitas acabam recorrendo ao uso de materiais inapropriados para conter o fluxo, como panos, restos de jornal, papel higiênico e até miolo de pão, aumentando o risco de doenças e infecções."
    },
    {
     ponto0: "Você errou todas as quesões. Use isso como uma oportunidade de se atentar mais a questões humanas. Converse com mulheres sobre isso, se informe mais.",
     ponto1: "Você acertou 1 pergunta. De qualquer forma, esse quiz não tem vencedores, mas se você sentiu empatia por todas as Marias do Brasil, o quiz foi concluído com sucesso.",
     ponto2: "Você acertou 2 perguntas. De qualquer forma, esse quiz não tem vencedores, mas se você sentiu empatia por todas as Marias do Brasil, o quiz foi concluído com sucesso.",
     ponto3: "Você acertou 3 perguntas. De qualquer forma, esse quiz não tem vencedores, mas se você sentiu empatia por todas as Marias do Brasil, o quiz foi concluído com sucesso."
    }
  ];

  


  
   