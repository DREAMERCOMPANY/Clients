const d = document;
const serviceCard = d.querySelector('.services__card');
const btnDiscover = d.querySelector('#discoverBtn');
const serviceCardBack = d.querySelector('.services__card--back');
const titleContainer = d.querySelector('.services__card--back__title')
const cardsBackItem = d.querySelectorAll('.services__card--back__item')
const serviceCardsContainer = d.querySelector('.services__card--back__cards')
const cardsHideBtn = d.querySelector('#hideCardsBtn')
const btnDesign = d.querySelector('#design__btn')
btnDesign.addEventListener('click', showHideDesign)
/* serviceCardBack.addEventListener('mouseleave', showFront); */

btnDiscover.addEventListener('click', ()=> {
    showBack();
    backIn()
});

cardsHideBtn.addEventListener('click', ()=>{
    showFront()
    serviceCardsContainer.classList.add('hide')
    titleContainer.classList.remove('hide')
    cardsBackItem.forEach(item => item.style.animation = 'none')
})



    function rotateCard(degrees) {
        serviceCard.style.transform = `rotateX(${degrees}deg)`;
    }

    function showFront() {
        rotateCard(0);
    }

    function showBack() {
        rotateCard(180);
    }



    



console.log(cardsBackItem)

function backIn(){
    titleContainer.style.opacity = '0';
    titleContainer.style.animation = 'opacityTitleIn 2s 0.9s ease-in-out forwards';
}



function backOut(){
    titleContainer.style.opacity = '1';
    titleContainer.style.animation = 'opacityTitleOut 1.2s 0.4s ease-in-out forwards';
} 

function removeBackIn(){
    titleContainer.classList.add('hide')
    serviceCardsContainer.classList.remove('hide')
    cardsBackItem.forEach((item, index) => {
        const delay = `${index * 0.3}s`
        item.style.opacity = '0';
        item.style.animation = `opacityTitleIn 2s ${delay} ease-in-out forwards` ;
        item.classList.remove('hide')
    }) 
}

function showHideDesign(){
    backOut()
    setTimeout(removeBackIn, 1000)   
}

//Call main function


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

