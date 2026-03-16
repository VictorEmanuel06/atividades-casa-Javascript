/*Exercício 1: Classificação de Temperatura 
Descrição: Crie um programa que classifique a temperatura fornecida em uma das 
seguintes categorias: "Frio", "Agradável", "Quente" ou "Muito Quente".  
Tabela de classificação: 
• Frio: abaixo de 15°C 
• Agradável: entre 15°C e 25°C 
• Quente: entre 26°C e 35°C 
• Muito Quente: acima de 35°C  */

let temperatura = 28;

if (temperatura < 15) {
    console.log("Frio");
} else if (temperatura >= 15 && temperatura <= 25) {
    console.log("Agradável");
} else if (temperatura >= 26 && temperatura <= 35) {
    console.log("Quente");
} else {
    console.log("Muito Quente");
}



/*Exercício 2: Verificação de Maioridade 
Descrição: Crie um programa que verifique se uma pessoa é maior de idade. */

let idade = 20;

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}


/*Exercício 3: Cálculo de Salário com Aumento 
Descrição: Uma empresa concede aumentos salariais de acordo com a faixa salarial do 
funcionário. Implemente um programa que calcule o novo salário com base na tabela 
abaixo:  
• Salários até R$ 2.000,00: aumento de 10% 
• Salários entre R$ 2.001,00 e R$ 5.000,00: aumento de 7% 
• Salários acima de R$ 5.000,00: aumento de 5%*/

let salario = 3000;
let novoSalario;

if (salario <= 2000) {
    novoSalario = salario * 1.10; 
} else if (salario <= 5000) {
    novoSalario = salario * 1.07; 
} else {
    novoSalario = salario * 1.05; 
}

console.log("Novo salário: R$ " + novoSalario.toFixed(2));