function meuEscopo() {
    const form = document.querySelector('.form');

    form.onsubmit = function (evento) {
    evento.preventDefault();// você previne o que era para acontecer de modo padrão, no caso atualizar a pagina e perder os dados.  
    };
}