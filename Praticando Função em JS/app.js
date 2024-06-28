// Criar uma função para calcular IMC

function calcularIMC(massa, altura) {
    IMC = massa/(altura * altura);
return IMC;
}

let massa = Number(prompt('Digite sua massa corporal: '));
let altura = Number(prompt('Digite sua altura: '));
let imc = calcularIMC(massa, altura);

let resultadoIMC = `Seu IMC é ${imc}`;

// Criar uma função para calcular fatorial

function calcularFatorial(valorFatorial) {
    fatorial = 1;
    i = 1;
    while (i <= valorFatorial) {
        fatorial *= i;
        i++
    }
    return fatorial
}

let valorFinal = calcularFatorial(4);
let resultado = `O resultado do número fatorial é ${valorFinal}`

//