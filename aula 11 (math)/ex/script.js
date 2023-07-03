let numero = Number(prompt('Digite o Número:'));//trocando string para number//

//para selecionar o id de algum elemento basta usar o metodo getElementById()
//dentro dos paranteses voce coloca o id que você quer selecionar
//tem q salvar em algum canto usando uma variavel
let numeroTitulo = document.getElementById('numero-titulo');
let texto = document.getElementById('texto');



numeroTitulo.innerHTML = numero;//vinculando uma area do html com js usando innerHTML//
texto.innerHTML ="";
texto.innerHTML +=`<p>Raiz quadrada é: ${numero ** (1/2)}.</p>`;
texto.innerHTML +=`<p>${numero} é inteiro?: ${Number.isInteger(numero)}.</p>`
texto.innerHTML +=`<p>${numero} é NaN?: ${Number.isNaN(numero)}.</p>`
texto.innerHTML +=`<p>${numero} arredondado para baixo: ${Math.floor(numero)}.</p>`
texto.innerHTML +=`<p>${numero} arredondado para cima: ${Math.ceil(numero)}.</p>`
texto.innerHTML +=`<p>${numero} com duas casas decimais: ${numero.toFixed(2)}.</p>`