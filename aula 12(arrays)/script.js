//array pode ser imaginado como uma lista de coisas//
//array é envolto de colchete//
let alunos = ['joao', 'maria', 'jose']
console.log(alunos);
//arrays tambem são indexados, mas  por elementos//
//                0        1        2
let alunosEx = ['joao', 'maria', 'jose']
//então para rxibir somente 1, basta colocar o index dele//
console.log(alunosEx[0]);

//caso eu queira editar, basta eu fazer o seguinte//
alunosEx[0] = 'Luizin';
console.log(alunosEx);
//veja que luizin substituiu joao//

//se eu quiser saber o tamanho do meu array basta somente usar o .lenght//
console.log(alunosEx.length);

//caso eu queira colocar mais elementos no array, basta usar o .push//
alunosEx.push('Luiza Mel');//adiciona no fim
console.log(alunosEx);

//para adicionar ao começo do array, basta usar .unshift//
alunosEx.unshift('Gustavo Lima');//adicionando ao começo
console.log(alunosEx);

//caso eu queira tirar um elemento do array, basta eu usar .pop//
alunosEx.pop()
console.log(alunosEx);
//podemos tambem salvar o removido em uma variavel
let removido = alunosEx.pop();
console.log(removido);
console.log(alunosEx);

