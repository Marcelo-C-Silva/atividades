let form = document.querySelector('#formulario');

form.addEventListener('submit', function (event) {
    event.preventDefault();
});

function setResultado (mensage) {
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = mensage;
};