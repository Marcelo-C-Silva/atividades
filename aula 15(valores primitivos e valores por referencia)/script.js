function meuEscopo() {
    let form = document.querySelector('.form');
    let resultado = document.querySelector('.resultado');

    let pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();
        let nome = form.querySelector('.nome');
        let sobrenome = form.querySelector('.sobrenome');
        let peso = form.querySelector('.peso')
        let altura = form.querySelector('.altura')
        

        pessoas.push({ //Quando eu quiser preencher um form com array eu uso isso
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })
    };
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();

nome.value