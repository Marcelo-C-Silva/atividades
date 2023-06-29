let varA = 'A';
let varB = 'B';
let varC = 'C';
let intruso = varA;
//quando tiver um problema desse, basta criar uma nova variavel e atribuir outra variavel como valor, assim o numero não se repete//
varA = varB
varB = varC
varC = intruso;
console.log(varA, varB, varC);


//podemos resolver tbm assim [varA, varB, varC] = [varB, varC, varA]//
[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC);

