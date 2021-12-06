
//Função para escolher um número e calcular uma tabuada qualquer...
function calculaTabuada(){

    //Uma variável para atribuir valor ao nosso código na tabela...
    let tabuada = document.querySelector("#tabuada tbody");

    //Variável para receber o valor do número que desejamos multiplicar na tabuada...
    let valorA = parseInt(document.querySelector("#valorA").value);

    //Comando para reiniciar uma nova tabuada quando mudamos o número...
    tabuada.innerHTML = '';

    //Laço para criar as linhas da tabuada de 0 á 10...
    for (let valorB = 0; valorB <= 10; valorB++) {

        let resultado = valorA * valorB;

        //Criamos os dados de uma linha dentro de um template e o atribuímos a uma variável
        let template = 
        `
        <td>${valorA}</td>
        <td>x</td>
        <td>${valorB}</td>
        <td>=</td>
        <td>${resultado}</td>
        `;

        //Criamos uma variável que recebe a criação de uma tag tr...
        let tr = document.createElement('tr');

        //Fizemos a tag tr criada receber o template do laço for...
        tr.innerHTML = template;

        //Em seguida cada linha do laço é adicionada ao HTML original por através do comando append() atribuída por através de id
        tabuada.append(tr);
    }

}

calculaTabuada();
//A função já inicia automático

document.querySelector("#valorA").addEventListener('change', calculaTabuada);
// como valor a função pega o valor atribuído ao valorA e calcula pela função