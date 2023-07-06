//USANDO FUNÇÂO PARA CRIAR OBJETOS

function criarPessoas(nome, sobrenome, idade) {
    return{
        nome,
        sobrenome,
        idade
    }    
}
const pessoa1 = criarPessoas('joao', 'marcelo', 25)
const pessoa2 = criarPessoas('carlos', 'eduardo', 25)

console.log(pessoa1.nome, pessoa2.nome)