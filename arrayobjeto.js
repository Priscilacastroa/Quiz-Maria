const quiz = [
    {
      pergunta1: "Maria Eduarda foi estuprada quando saia de casa para trabalhar por volta das 5h da manhã de uma segunda-feira. Você faz ideia da média de estupros registrados no Brasil no ano de 2021?",
      pergunta2: "Maria do Carmo entrou para o índice de feminicídio, foi morta a facadas por seu ex companheiro após ser vista com um novo namorado. Quantas mulheres você acredita que morreram em 2021 devido ao feminicídio?", 
      pergunta3: "Maria Clara, 12 anos, faltou a aula hoje, ela está menstruada e sua mãe mais vez teve que usar o pouco dinheiro que tinha com itens básicos de alimentação, mas mesmo assim, hoje ela não terão o que jantar. Você imagina qual o índice de adolescentes que não possui absorventes durante seu período menstrual?"
    },
    {
      alternativas1: ["Um estupro a cada oito horas.", "Um estupro a cada duas horas.", "Um estupro a cada dez minutos.",],
      alternativas2: ["Uma a cada seis horas e meia.", "Uma a cada nove horas e meia.", "Uma a cada quinze horas e meia.",],
      alternativas3: ["Uma a cada quatro adolescentes.", "Uma a cada dez adolescentes.", "Uma a cada vinte adolescentes."]
    },
    {
     informaçãoAcerto1: "Você acertou. Infelizmente, a média em 2021 foi de 1 estupro a cada 10 minutos. Houve aumento de 3,7% em relação a 2020, segundo Fórum Brasileiro de Segurança Pública. Foram 56 mil casos, incluindo estupros de meninas menores de 14 anos, ou mulheres incapazes de consentir ou de oferecer resistência.",
     informaçãoAcerto2: "Você acertou. Infelizmente uma mulher morre a cada seis horas e meia. Três a cada quatro vítimas de feminicídio tinham entre 19 e 44 anos. A maioria (61,8%) era negra. Em geral, o agressor é uma pessoa conhecida: 81,5% dos assassinos eram companheiros ou ex-companheiros, enquanto 8,3% das mulheres foram mortas por outros parentes.",
     informaçãoAcerto3: "Você acertou. Infelizmente a pobreza menstrual existe. 713 mil meninas vivem sem acesso a banheiro ou chuveiro em seu domicílio. Outras 4 milhões não têm acesso a itens mínimos de cuidados menstruais nas escolas, como absorventes, sabonetes ou mesmo banheiro ou chuveiro em seu domicílio. Muitas acabam recorrendo ao uso de materiais inapropriados para conter o fluxo, como panos, restos de jornal, papel higiênico e até miolo de pão, aumentando o risco de doenças e infecções."
    },
    {
     informaçãoErro1: "Você errou. Infelizmente, a média em 2021 foi de 1 estupro a cada 10 minutos. Houve aumento de 3,7% em relação a 2020, segundo Fórum Brasileiro de Segurança Pública. Foram 56 mil casos, incluindo estupros de meninas menores de 14 anos, ou mulheres incapazes de consentir ou de oferecer resistência.",
     informaçãoErro2: "Você errou. Infelizmente uma mulher morre a cada seis horas e meia. Três a cada quatro vítimas de feminicídio tinham entre 19 e 44 anos. A maioria (61,8%) era negra. Em geral, o agressor é uma pessoa conhecida: 81,5% dos assassinos eram companheiros ou ex-companheiros, enquanto 8,3% das mulheres foram mortas por outros parentes.",
     informaçãoErro3: "Você errou. infelizmente a pobreza menstrual existe. 713 mil meninas vivem sem acesso a banheiro ou chuveiro em seu domicílio. Outras 4 milhões não têm acesso a itens mínimos de cuidados menstruais nas escolas, como absorventes, sabonetes ou mesmo banheiro ou chuveiro em seu domicílio. Muitas acabam recorrendo ao uso de materiais inapropriados para conter o fluxo, como panos, restos de jornal, papel higiênico e até miolo de pão, aumentando o risco de doenças e infecções."
    }, 
    {
     ponto0: "Você errou todas as quesões. Use isso como uma oportunidade de se atentar mais a questões humanas. Converse com mulheres sobre isso, se informe mais.",
     ponto1: "Você acertou 1 pergunta. De qualquer forma, esse quiz não tem vencedores, mas se você sentiu empatia por todas as Marias do Brasil, o quiz foi concluído com sucesso.",
     ponto2: "Você acertou 2 perguntas. De qualquer forma, esse quiz não tem vencedores, mas se você sentiu empatia por todas as Marias do Brasil, o quiz foi concluído com sucesso.",
     ponto3: "Você acertou 3 perguntas. De qualquer forma, esse quiz não tem vencedores, mas se você sentiu empatia por todas as Marias do Brasil, o quiz foi concluído com sucesso."
    }
    
  ];

  //Acessa todo o meu bloco de perguntas
  console.log(quiz[0]);
  
  //Acessa minha pergunta1
  console.log(quiz[0].pergunta1);
  //Acessa minha pergunta2
  console.log(quiz[0].pergunta2);
  //Acessa minha pergunta3
  console.log(quiz[0].pergunta3);

  //Acessando todas as minhas alternativas de todas as peruntas
  console.log(quiz[1]);

  //Acessando minha alternativa1
  console.log(quiz[1].alternativas1);
  //Acessando minha alternativa2
  console.log(quiz[1].alternativas2);
  //Acessando minha alternativa3
  console.log(quiz[1].alternativas3);

  //Acessando a reposta certa pergunta1
  console.log(quiz[1].alternativas1[2]);
  //Acessando a reposta certa pergunta2
  console.log(quiz[1].alternativas2[0]);
  //Acessando a reposta certa pergunta3
  console.log(quiz[1].alternativas3[0]);

  //Acessando a informação de acerto1
  console.log(quiz[2].informaçãoAcerto1);
  //Acessando a informação de acerto2
  console.log(quiz[2].informaçãoAcerto2);
  //Acessando a informação de acerto3
  console.log(quiz[2].informaçãoAcerto3);

  //Acessando a informação de erro1
  console.log(quiz[3].informaçãoErro1);
  //Acessando a informação de erro2
  console.log(quiz[3].informaçãoErro2);
  //Acessando a informação de erro3
  console.log(quiz[3].informaçãoErro3);

  //Acessando a informação de pontuação0
  console.log(quiz[4].ponto0);
  //Acessando a informação de pontuação1
  console.log(quiz[4].ponto1);
  //Acessando a informação de pontuação2
  console.log(quiz[4].ponto2);
  //Acessando a informação de pontuação3
  console.log(quiz[4].ponto3);

  //Guardadando as respostas certas em variáveis
  let respostaCerta1 = quiz[1].alternativas1[2]
  let respostaCerta2 = quiz[1].alternativas2[0]
  let respostaCerta3 = quiz[1].alternativas3[0]
  console.log(respostaCerta1);
  console.log(respostaCerta2);
  console.log(respostaCerta3);

  //Condição para acessar a reposta certa Questão 1
  let respostaEscolhida1 = quiz[1].alternativas1[2];
  if (respostaEscolhida1 === respostaCerta1) {
      console.log(quiz[2].informaçãoAcerto1);
  }else{
      console.log(quiz[3].informaçãoErro1);
  }  

  //Condição para acessar a reposta certa Questão 2
  let respostaEscolhida2 = quiz[1].alternativas2[0] ;
  if (respostaEscolhida2 === respostaCerta2) {
      console.log(quiz[2].informaçãoAcerto2);
  }else{
      console.log(quiz[3].informaçãoErro2);
  }  

  //Condição para acessar a reposta certa Questão 3
  let respostaEscolhida3 = quiz[1].alternativas3[0] ;
  if (respostaEscolhida3 === respostaCerta3) {
      console.log(quiz[2].informaçãoAcerto3);
  }else{
      console.log(quiz[3].informaçãoErro3);
  }  


  
   