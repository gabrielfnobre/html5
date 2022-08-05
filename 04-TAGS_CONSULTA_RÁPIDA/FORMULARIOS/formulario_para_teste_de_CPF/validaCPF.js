document.querySelector('#cpf').addEventListener('blur', e => validaCPF(e.target))

//Função chamada...
function validaCPF(input){
    //troca tudo o que não for dígito por nada...
    const CPFformatado = input.value.replace(/\D/g, '')
    let mensagem = ''

    if(!checaCPFRepetido(CPFformatado) || !checaEstruturaCPF(CPFformatado)){
        mensagem = 'O CPF digitado não é valido!'
        input.setCustomValidity(mensagem)
    } else {
        alert('CPF VÁLIDO!')
        input.setCustomValidity(mensagem)
    }

    
}

function checaCPFRepetido(cpf){
    const valoresRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
    ]

    let CPFValido = true

    valoresRepetidos.forEach(valor => {
        if(valor == cpf)
            CPFValido = false
    })

    return CPFValido
}

function checaEstruturaCPF(cpf){
    const multiplicador = 10

    return checaDigitoVerificador(cpf, multiplicador)
}

function checaDigitoVerificador(cpf, multiplicador){

    //faz a função não ser chamada recursivamente infinitamente
    if(multiplicador >= 12){
        return true
    }

    let multiplicadorInicial = multiplicador
    let soma = 0
    const cpfSemDigitos = cpf.substr(0, multiplicador - 1).split('')
    for(let contador = 0; multiplicadorInicial > 1; multiplicadorInicial--){
        soma = soma + cpfSemDigitos[contador] * multiplicadorInicial
        contador ++
    }
    
    const digitoVerificador = cpf.charAt(multiplicador - 1)
    if(digitoVerificador == confirmaDigito(soma))
        return checaDigitoVerificador(cpf, multiplicador + 1)

    return false

}

function confirmaDigito(soma){
    let restoDaDivisao = soma % 11
    if(restoDaDivisao >= 2){
        return 11 - restoDaDivisao
    } else {
        return 0
    }
}