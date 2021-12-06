
//Array para coletar os valores da lista
let data = [];

//Essa é a função de renderização na tela, ela só vai carregar tarefas se elas já existirem no array "data", á princípio ela não carrega tarefa nenhuma, pois o array data está vazio. É necessário chamar que o usuário digite tarefas no input para que o array tenha tarefas listadas para serem renderizadas.
function renderToDo() {

    document.querySelector(".toDo").innerHTML = '';

    //Função para atribuir itens a lista dinâmicamente
    //Perceba que usamos a função forEach para adicionar os itens do array para o documento HTML...
    data.forEach(task => {
        //O argumento "task" será passado uma vez para cada elemento que existir dentro do array "data"...

        let li = document.createElement('li');
        // Essa variável faz a criação da tag "li" acontecer

        li.innerHTML =
        /*innerHTML vai adicionar o conteúdo que estiver atribuído a tag li criada para o arquivo HTML original*/
        `
            <input type="checkbox" id="task-${task.id}">
            <label for="task-${task.id}">${task.title}</label>
            <button type="button">X</button>
        `;
        //Adicionamos um id chamado "task" ao input checkbox para que as palavras marcassem o checkbox como feito á medida que as palavras do input fossem tocadas, isso acontece graças a tag "label" que faz essa marcação dentro dos checkboxes, e um botão para exclusão das tarefas.
        //Perceba que enquando as tags input vão pegando os valores existentes nos ids dos arrays, a medida que o "task" entra em cada laço do forEach, as tags label vão pegando as tarefas descritas em "title" a cada laço do forEach...

        //Aqui temos uma função para adicionar uma formatação css diferenciada para quando os nossos itens são marcados ou desmarcados
        li.querySelector('input').addEventListener("change", e => {
        //A mesma tag li criada dentro da função com forEach, nós selecionamos a partir dela a tag input e ficamos escutando um evento de mudança

            if (e.target.checked) {
                li.classList.add('complete');
            } else {
                li.classList.remove('complete');
            }
            // temos um desvio condicional onde, se um item estiver checado a formatação da classe "complete" é adicionada ao item, se ele estiver desmarcado, ele seguirá com a formatação normal

        })

        //Essa função excluí somente a tarefa que desejamos excluir e filtra as outras para permanecerem...
        li.querySelector("button").addEventListener("click", e =>{
        //Se clicarmos no botão de excluir numa determinada tarefa acontece o seguinte...

            // Dentro de uma variável colocamos o botão da tarefa especifíca capturando qual é o elemento pai delete (parentNode), depois selecionamos ele pelo input e pegamos o seu id, que no caso é "task-n", usando split e dividindo o nome "task-n" ao meio retirando o valor "-"(traço), pegamos somente o valor de índice "1" que é o número da tarefa especificamente falando...
            let toDoId = e.target.parentNode.querySelector('input').id.split('-')[1];

            // Aqui usamos uma variável para pegar o título da tarefa, que estiver na tag label...
            let title = e.target.parentNode.querySelector('label').innerText;

            //Antes de excluir a tarefa temos um desvio condicional para verificar se desejamos excluir mesmo uma tarefa ou não...
            if (confirm(`Deseja realmente excluir a tarefa: ${title}?`)) {

            //então jogamos esse valor dentro do array "data" porém filtrando os valores do array para receber todos os valores que já tinha antes, porém, eliminando o único valor cujo id for igual ao valor que aparecer na variável toDoID, ou seja, o valor da tarefa a ser deletada...
            data = data.filter(task => task.id !== parseInt(toDoId));

            renderToDo();
            // No fim, renderizamos o array novamente, porém sem a tarefa que já deveria ter sido excluída...

            }

        })

        document.querySelector('.toDo').append(li);
        //Esse comando faz com que tudo o que aconteceu no forEach seja adicionado ao documento HTML original

    });

}

//A função abaixo só é chamada quando o usuário digita uma tarefa nova na tela...
//Para pegar as tarefas digitadas na lista...
document.querySelector("#new-task").addEventListener("keyup", e => {
//Usando o id "new-task" conseguimos capturar os textos escritos dentro do input das tarefas...

    if (e.key === 'Enter') {
        console.log(e.target.value);

        data.push({
            id: data.length+1,
            title: e.target.value
        });
        //Fizemos um desvio condicional "if" onde, á menos que a tecla Enter seja digitada o console não pega as teclas escritas antes do Enter acontecer, mas quando o Enter acontece, o console pega todas as teclas que foram digitadas no input. Além de irem para o console, as as tarefas são adicionadas ao array "data" por através da função builtin push(), que vai adicionar uma nova tarefa dando um "id" a ela de acordo com o tamanho do array, por através da propriedade length, e como título da tarefa, será adicionado o valor escrito no input.

        e.target.value = '';
        //O valor e é zerado para que não escreva tudo 2 vezes;

        renderToDo();
        //Ao final a função render toDo() é chamada para renderizar na tela a tarefa nova...
    };
    
})

renderToDo();
//Graças ao hosting a 1 tarefa a ser chamada é a renderização de uma lista de tarefas esperando valores...