// para escapar um caractere basta so colocar uma \ //
let umaString = 'um texto';

console.log(umaString);

//indice 0 eh a primeira posição)
console.log(umaString[4]);
//resultado vai dar E, pois no scopo o E ta na quarta posição//

//podemos usar indexOf() para saber a posição//
console.log(umaString.indexOf('o', 3));
//vai procurar O a partir da posição 3, caso ta na setima posição//

//usamos lastIndexOf() para vim procurando de trás para frente//
console.log(umaString.lastIndexOf('m', 3));
//no caso, M ta na primeira posição//

//usamos o replace() para subistituir//
console.log(umaString.replace('um' , 'Outro'));
//alteramos 'um' por 'Outro'//

//usamos o match() para retornar todas as letras da string//
console.log(umaString.match(/[a-z]/g));
//podemos ver todas as letras da string//

//usamos slice para mostrar so algumas letras da string
console.log(umaString.slice(-5));
//o resultado foi "texto", pois conta 5 de trás para frente e ignora o resto, podemos fazer o contrario tbm//

//para deixar a string toda maiuscula, usamos toUpperCase()//
console.log(umaString.toUpperCase);
//ficou tudo maiusculo//

//para deixar tudo minusculo, usamos toLowerCase()//
console.log(umaString.toLowerCase);
//ficou tudo minusculo//