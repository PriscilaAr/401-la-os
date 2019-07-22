/*let nomeTartaruga = "Ângelo";
nomeTartaruga = contador = 0;

while (contador<10){
    console.log(nomeTartaruga);
    contador ++;
}*/



/*let listaDeCornos = ["Fernando Furtivo", "Hugo Felipe de Votuy", "Tefunor da Silva Bednou", "Kugo da Silva", "Jorjanonei Dlogo"];

for(let contador = 0; contador<listaDeCornos.length; contador++){
    console.log (listaDeCornos[contador]);
}*/



/*let listaDeCornos = ["Fernando Furtivo", "Hugo Felipe de Votuy", "Tefunor da Silva Bednou", "Kugo da Silva", "Jorjanonei Dlogo"];

for(let numero in listaDeCornos){
    console.log (numero);
}

for(let aluno of listaDeCornos){
    console.log (aluno);
}*/



/*let listaDeCornos = ["Fernando Furtivo", "Hugo Felipe de Votuy", "Tefunor da Silva Bednou", "Kugo da Silva", "Jorjanonei Dlogo"];

for(let numero in listaDeCornos){
    console.log (numero);
}

for(let aluno of listaDeCornos){
    console.log (aluno);
}*/



let filmes = [
    {nome: "Rei Leão", classificação: 12, estilo: Animação},
    {nome: "Corajosos", classificação: 16, estilo: Ação},
    {nome: "Como se fosse a primeira vez", classificação: 18, estilo: Romace}
];

for(let filmes of filmes){
    console.log(`O filme ${filme.nome} tem a classifição de ${classificação} anos, e o estilo do filme é ${estilo}.`)
}