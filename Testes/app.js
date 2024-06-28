// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Hora do Desafio';

function editorDeTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

editorDeTexto('h1', 'Hora do Desafio')

function verificarClique() {
    console.log('O botão foi clicado.');
}


function verificarAlerta () {
    console.log('Eu amo JS');
}

function verificarPrompt() {
    let cidade = prompt('Qual sua cidade?');
    console.log(`Estive em ${cidade} e lembrei de você.`);
}

function verificarSoma() {
    let num1 = prompt('');
    let num2 = prompt('');
    let soma = Number(num1) + Number(num2);
    alert(`O resultado é: ${soma}`);
}