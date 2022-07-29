//Perceba que estamos trabalhando com importação de módulo, então é necessário trabalhar com um servidor http e com o arquivo html como type="module"
import {validaInput} from './validacao.js'

//Uma constante que pega todos inputs e os coloca num array...

const inputs = document.querySelectorAll('input')

//Adiciona um evento blur para validação de cada input capturado...

inputs.forEach(input => {
    input.addEventListener('blur', (event) => {
        validaInput(event.target) //cada evento chama a função 
    })                            // validaInput
})
