const d = document
const serviceCard = d.querySelector('.services__card')
const btnDiscover = d.querySelector('#discoverBtn')
const serviceCardBack = d.querySelector('.services__card--back')

btnDiscover.addEventListener('click', ()=>{
    serviceCard.style.transform = 'rotateX(180deg)'

})

serviceCardBack.addEventListener('mouseleave', ()=>{
    serviceCard.style.transform = 'rotateX(0deg)'
})