function calculadora() {
    const operacao = Number(prompt ("Escolha uma operação:\n 1-Soma (+)\n 2-subtração (-)\n 3- multiplicação (*)\n 4 - divisão real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)"));

let n1 = Number(prompt ('Insira o primeiro valor:'));
let n2 = Number(prompt ('Insira o segundo valor:'));
let resultado;

function soma () {
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`)
}
function subtracao () {
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`)
}
function multiplicacao () {
    resultado = n1 * n2
    alert(`${n1} * ${n2} = ${resultado}`)
}function divisaoReal () {
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`)
}function divisaoInteira () {
    resultado = n1 % n2;
    alert(`o resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
}function potenciacao () {
    resultado = n1 ** n2
    alert(`${n1} elevado a ${n2}ª é igual a ${resultado}` )
}

function novaOperacao() {
    let opcao = prompt ('Deseja fazer outra operação? \n 1 - Sim \n 2 - Não')
}
if (operacao == 1) {
    soma();
} else if (operacao == 2){
    subtracao();
} else if (operacao == 3){
    multiplicacao();
} else if (operacao == 4){
    divisaoReal();
} else if (operacao == 5){
    divisaoInteira()
} else if (operacao == 6) {
    potenciacao();
}
} 


 
calculadora();



