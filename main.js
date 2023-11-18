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

