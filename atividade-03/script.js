/*Exercício 1: Lista de tarefas domésticas 
Descrição: 
Você tem uma lista de tarefas para realizar em casa. Use um loop para listar todas as 
tarefas numeradas. */

let tarefas = [
    "Lavar a louça",
    "Varrer a casa",
    "Lavar a roupa",
    "Arrumar o quarto",
    "Tirar o lixo"
];

for (let i = 0; i < tarefas.length; i++) {
    console.log((i + 1) + " - " + tarefas[i]);
}


/*Exercício 2: Contagem regressiva para o alarme 
Descrição: 
Simule uma contagem regressiva para tocar um alarme após alguns segundos. */

for (let i = 5; i >= 1; i--) {
    console.log(i);
}

console.log("Alarme!");


/*Exercício 3: Contar moedas em um cofrinho 
Descrição: 
Você encontrou um cofrinho com várias moedas de R$1,00. Crie um programa que conte 
quantas moedas há e exiba o valor total.*/

let moedas = 10;
let total = 0;

for (let i = 1; i <= moedas; i++) {
    total = total + 1;
}

console.log("Quantidade de moedas: " + moedas);
console.log("Valor total: R$ " + total);