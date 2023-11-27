const d = document;
const serviceCard = d.querySelector('.services__card');
const btnDiscover = d.querySelector('#discoverBtn');
const serviceCardBack = d.querySelector('.services__card--back');

function setupCardRotation() {

    function rotateCard(degrees) {
        serviceCard.style.transform = `rotateX(${degrees}deg)`;
    }

    function showFront() {
        rotateCard(0);
    }

    function showBack() {
        rotateCard(180);
    }

    btnDiscover.addEventListener('click', showBack);
    serviceCardBack.addEventListener('mouseleave', showFront);
}

//Call main function
setupCardRotation();
const formulario = document.getElementById('formulario');
        formulario.addEventListener('submit', (event) => {
            event.preventDefault();
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const pais = document.getElementById('pais').value;
            const robot = document.getElementById('robot').checked;
            const apellido = document.getElementById('apellido').value;
            const empresa = document.getElementById('empresa').value;
            const boletin = document.getElementById('boletin').checked;
            
            if (!robot) {
                alert('Debes confirmar que no eres un robot');
                return;
            }
            
            alert(`Registro exitoso, ${nombre} ${apellido}! Tu país es ${pais}, tu empresa es ${empresa}, y ${boletin ? 'te has suscrito' : 'no te has suscrito'} al boletín.`);
        });

