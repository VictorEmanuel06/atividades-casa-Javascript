/*Maratona 1 Javascript 
Exercício 1: Calculadora de Desconto em Compras 
Situação: Você foi até uma loja e encontrou uma etiqueta com o preço de um 
produto. A etiqueta informa que o produto está com 15% de desconto. 
Objetivo: Calcular o preço final do produto aplicando o desconto. */

let produto = 100;
let desconto = produto * 0.15;
let valorFinal = produto - desconto

console.log("Preço original: R$ " + produto)
console.log("O valor do desconto é: R$" + desconto);
console.log("O preço final é: R$" + valorFinal);


/* Exercício 2: Conversor de Temperatura 
Situação: Você está viajando para os Estados Unidos e deseja saber a temperatura em 
Fahrenheit, pois lá a temperatura é medida dessa forma.  
Objetivo: Converter uma temperatura de Celsius para Fahrenheit. */

let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;

console.log("Temperatura em Celsius: " + celsius);
console.log("Temperatura em Fahrenheit: " + fahrenheit);



/* Exercício 3: Sistema de Login Simples 
Situação: Você está desenvolvendo um sistema de login para um site. 
Objetivo: Verificar se o usuário e a senha fornecidos são válidos.*/

let usuariocorreto = "Admim1";
let senhacorreta = "123456";

let usuariodigitado = "Admim1"
let senhadigitada = "123456"

if (usuariocorreto === usuariodigitado && senhacorreta === senhadigitada) {
    console.log("login realizado com sucesso!")
}else {
    console.log("Usuario ou senha errada!")
}


/*Exercício 4: Sistema de Notas de Alunos 
Situação: Você é professor e deseja calcular a média das notas dos alunos para 
determinar sua situação. 
Objetivo: Calcular a média das notas e determinar se o aluno foi aprovado, está de 
recuperação ou reprovado.*/

let media1 = 6;
let media2 = 5;
let media3 = 0;
let media4 = 8;

let media = (media1 + media2 + media3 + media4)/4;

console.log("Média: " + media);

if (media >= 7) {
    console.log("Aluno Aprovado!!");
} else if (media >= 5){
    console.log("Aluno de Recuperação");
} else {
    console.log("Aluno Reprovado!")
}
