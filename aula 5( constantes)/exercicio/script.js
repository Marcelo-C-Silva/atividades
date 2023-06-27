let nome ='Luiz Otávio';
let sobreNome ='Miranda';
let idade = 30;
let peso= 84;
let altura=1.80;
let imc;// peso / (altura * altura)
let anoNascimento;

imc = peso/(altura * altura);
anoNascimento = 2023 - idade;

console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso}kg, tem ${altura} de altura e seu imc é de ${imc}.`);
console.log(`${nome}, nasceu em ${anoNascimento}.`)
//Luiz Otávio Miranda tem 30 anos,pesa 84 kg, tem 1.8 de altura e seu imc é de 25.925925925925924 Luiz Otávio nasceu em 1993//
