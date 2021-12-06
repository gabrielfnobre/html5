//Definições dos comandos em javascript:

//document: se refere ao documento onde o script está sendo linkado;
//getElementByID: pega elementos pelo nome de id;
//querySelector: pega dos elementos por id, porém imitando o formato de seleção do CSS;
//addEventListener: faz com que um evento seja aplicado ao elemento;
// => : arrow funciont, faz com que uma função seja aplicada a um elemento quando um evento acontece sobre ele;
//value: para capturar o valor armazenado dentro de uma tag, como os valores colocados nos inputs por exemplo;


//Comportamentos de botão...
//Mostra que o botão foi clicado...
document.getElementById('btn-submit').addEventListener("click", e => {

    console.log('O botão foi clicado');

});

//Comportamentos de Formulário...
//Mostra que o mouse está passando por cima do formulário...
document.getElementById('form-login').addEventListener("mouseenter", e => {

    console.log('O mouse está sobre o formulário');

});

//Mostra que o mouse saiu da área do formulário...
document.querySelector('#form-login').addEventListener("mouseleave", e => {

    console.log('O mouse saiu do formulário');

});

//Captura o email e senha do login...
document.querySelector('#form-login').addEventListener("submit", e => {

    e.preventDefault();
    //Tiramos o comportamento padrão, de fazer com que o formulário abra em outra página;

    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    //Jogamos o email e senha dentro de variáveis 

    //Criamos aqui uma validação de dados...
    if (!email || !password){

        alert("O campo de e-mail e o de senha devem ser preenchidos!");
        console.info("Dados não foram validados, formulário não enviado!");
        //Se senha e email não forem preenchidos o usuário não consegue fazer validação

    } else {

        alert("Dados validados com sucesso!\nVeja no console os dados que foram capturados!")
        console.log(`Email:${email} Senha:${password}`);
        //Mostramos o email e senha capturados no console.
    }


//Gerando e capturando arquivos JSON...

//geração de uma variável JSON para capturar o email e a senha...
    let json = {
        email: email,  //Aqui capturamos o email dentro de uma propriedade JSON que recebe o valor do email da variável email
        password  //Como o nome da propriedade e da variável são o mesmo, podemos colocar somente um único nome e o JSON já vai interpretar corretamente
    };
    // Para montar um arquivo JSON basta colocá-lo entre chaves, onde as chaves vão delimitar o bloco JSON, as propriedades são separadas sempre por vírgula

    console.log(json);  //Veja a captura do email e da senha como arquivo JSON no console, perceba que o JSON gera um objeto JSON no console

//geração de uma variável para passar o arquivo JSON para uma String JSON...
    let stringJSON = JSON.stringify(json);  //Perceba que criamos uma variável que recebe um aquivo JSON e o converte numa string JSON...
    //String JSON são usadas para facilitar a interpretação do código nas mais diversas tecnologias que utilizam JSON

    console.log(stringJSON); //Veja o arquivo JSON convertido para String no console, perceba que ele não gera um objeto JSON

//Conversão de arquivo JSON para String JSON...
    let jsonParse = JSON.parse(stringJSON);  //Aqui temos uma váriave que recebe o nosso arquivo String JSON e o converte para JSON novamente...
    console.log(jsonParse);  //Perceba que a String JSON virou um objeto JSON novamente no console.
    console.log(`Email: ${jsonParse.email}`);  //Podemos pegar valores separadamente usando notação ponto com o nome da propriedade JSON
    console.log(`Senha: ${jsonParse.password}`);  //Podemos pegar valores separadamente usando notação ponto com o nome da propriedade JSON

})
