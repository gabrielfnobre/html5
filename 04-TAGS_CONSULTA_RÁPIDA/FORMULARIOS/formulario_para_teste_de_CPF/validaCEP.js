document.querySelector('#cep').addEventListener('blur', e => validacao(e.target))
document.querySelector('#logradouro').addEventListener('blur', e => validacao(e.target))
document.querySelector('#cidade').addEventListener('blur', e => validacao(e.target))
document.querySelector('#estado').addEventListener('blur', e => validacao(e.target))

function validacao(input){
    const tipo = input.dataset.tipo
    if(input.validity.patternMismatch){
        input.setCustomValidity('O CEP deve ir no formato: 00000-000 Ou 00000000')
        document.getElementById(`${tipo}`).style.setProperty('border-color', 'red')
    } else {
        recuperaCEP(input)
    }
}

function recuperaCEP(input){
    const cep = input.value.replace(/\D/g, '')
    const url = `https://viacep.com.br/ws/${cep}/json`
    const options = {
        method: 'GET',
        mode: 'cors',
        headers: {
            'content-type': 'application/json;charset=utf-8'
        }
    }

    if(!input.validity.patternMismatch && !input.validity.valueMissing){
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                if(data.erro){
                    input.setCustomValidity('Não foi possível buscar CEP')
                    return
                }
                input.setCustomValidity('')
                preencheCamposComCEP(data)
            })
    }

}

function preencheCamposComCEP(data){
    const logradouro = document.querySelector('[data-tipo="logradouro"]')
    const cidade = document.querySelector('[data-tipo="cidade"]')
    const estado = document.querySelector('[data-tipo="estado"]')

    logradouro.value = data.logradouro
    cidade.value = data.localidade
    estado.value = data.uf
}