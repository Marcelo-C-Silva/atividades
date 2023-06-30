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