let numero = Number(prompt('Digite o Número:'));//trocando string para number//

//para selecionar o id de algum elemento basta usar o metodo getElementById()
//dentro dos paranteses voce coloca o id que você quer selecionar
//tem q salvar em algum canto usando uma variavel
let numeroTitulo = document.getElementById('numero-titulo');
let raizTitulo = document.getElementById('raiz');
let inteiroTitulo = document.getElementById('inteiro');
let notTitulo = document.getElementById('not-number');
let arredondaB = document.getElementById('arredonda-baixo');
let arredondaC = document.getElementById('arredonda-cima');
let duasDecimal = document.getElementById('duas-decimal');


numeroTitulo.innerHTML = numero;//vinculando uma area do html com js usando innerHTML//
raizTitulo.innerHTML =`<p>Raiz quadrada é: ${numero ** (1/2)}.</p>`
inteiroTitulo.innerHTML =`<p>${numero} é inteiro?: ${Number.isInteger(numero)}.</p>`
notTitulo.innerHTML =`<p>${numero} é NaN: ${Number.isNaN(numero)}.</p>`
arredondaB.innerHTML =`<p>${numero} arredondado para baixo: ${Math.floor(numero)}.</p>`
arredondaC.innerHTML =`<p>${numero} arredondado para cima: ${Math.ceil(numero)}.</p>`
duasDecimal.innerHTML =`<p>${numero} com duas casas decimais: ${numero.toFixed(2)}.</p>`