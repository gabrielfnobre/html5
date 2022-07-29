//A função validaInput verifica se o input passado possuí um valor de data-attribute, se tiver, ele pegará uma função específica para aquele valor data-attribute...

//Perceba que estamos trabalhando com importação de módulo, então é necessário trabalhar com um servidor http e com o arquivo html como type="module"
export function validaInput(input){
    const tipoDeInput = input.dataset.tipo //dataset
    console.log(tipoDeInput)
    
    //chamamos um objeto que pode conter uma determinada chave 
    //contendo uma função de validação como seu valor

    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
        //aqui estamos chamando a função para aquele determinado 
        //data-attribute e passando o evento como parâmetro
    }
}

//Objeto que contém uma função de validação diferente para cada valor de data-attribute que existir...

const validadores = {
    dataNascimento: input => validaDataNascimento(input)
}

function validaDataNascimento(input){
    const dataRecebida = new Date(input.value)
    let mensagem = ''

    if(!maiorQue18(dataRecebida)){
        mensagem = 'Você deve ser maior que 18 anos para se cadastrar!'    
    }

    input.setCustomValidity(mensagem) //Exibe uma mensagem de erro
                                      //customizada à nossa escolha
}                                     //se um valor vazio for passado
                                      //o js entende que a validação
                                      //deu certo

function maiorQue18(data) {
    const dataAtual = new Date()

    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual
}
