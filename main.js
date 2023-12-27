const d = document;
const cardsContainer = d.querySelector('.services__cards')
const contactBtn = d.querySelector('#contact')
let iterationCount = 0

contactBtn.addEventListener('click', ()=>{
    const number = '+573009563427';
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${number}&text=Hola,%20quiero%20contactar%20contigo.`;
    window.open(urlWhatsApp, '_blank')
})

contactBtn.addEventListener('animationiteration', () => {
    iterationCount++;

    // Si ha alcanzado las 5 iteraciones, cancela la animación
    if (iterationCount >= 3) {
        contactBtn.style.animation = 'none'; 
    }
});

/*Create Dynamic cards*/

/*
TASKS

1. poner las cards en flex overscroll horizontal en mobile y en desktop en grid
2. mirar el diseño de esa seccion y terminarlo.
3.continuar con la siguiente seccion
*/


const productCards = []
productCards.push(
    {
        frontImg: './Assets/img/uxCard.jpg',
        frontTitle: 'Design System',
        frontSubtitle: 'UX/UI Design',
        frontServiceOne: 'Ease',
        frontServiceTwo: 'Motion',
        frontServiceThree: 'Drafting',
        frontDesc: 'Experts in UI/UX, Wireframing, and Prototyping for a seamless and engaging design experience.',
        backImg: './Assets/icons/designheroIcon.jpg',
        backTitle: 'Better user experience',
        backSubtitle: 'Increase your sales',
        backDesc: 'Optimizing client experience drives sales, fostering satisfaction and closing deals seamlessly and effectively.',
        backCardOneTitle: 'User Design',
        backCardOneDesc: `Conduct thorough user research to grasp your audience's needs. `,
        backCardTwoTitle: 'Consistent Branding',
        backCardTwoDesc: `Ensure consistent brand identity across your website, apps, social media and marketing.`,
        backCardThreeTitle: 'Personalization',
        backCardThreeDesc: `Implement personalized experiences based on users behavior.`,
    },

    {
    frontImg: './Assets/img/digitalMarketing.jpg',
    frontTitle: 'Digital Marketing', 
    frontSubtitle: 'SEO Strategies', 
    frontServiceOne: ' Opt', 
    frontServiceTwo: 'Manage', 
    frontServiceThree: 'Create', 
    frontDesc: 'Strategic digital marketing services for online visibility and engagement.', 
    backImg: './Assets/icons/marketinIcon.jpg', 
    backTitle: 'Boost Online Presence', 
    backSubtitle: 'Drive Conversion', 
    backDesc: 'Strategically enhance your online presence to drive conversion and achieve business goals.', 
    backCardOneTitle: 'SEO Optimization', 
    backCardOneDesc: 'Implement effective SEO strategies to improve website ranking and visibility.', 
    backCardTwoTitle: 'Social Media Campaigns', 
    backCardTwoDesc: 'Create and manage impactful social media campaigns for brand awareness.', 
    backCardThreeTitle: 'Content Strategy',
    backCardThreeDesc: 'Develop content marketing strategies for engaging and valuable user experiences.', 
    },
    {
    frontImg: './Assets/img/contentDev.jpg',
    frontTitle: 'Content Development',
    frontSubtitle: 'Strategic Content Creation',
    frontServiceOne: 'Create',
    frontServiceTwo: 'Optimize',
    frontServiceThree: 'Engage',
    frontDesc: 'Strategic content development services for optimizing online visibility and audience engagement.',
    backImg: './Assets/img/contentDev2.jpg',
    backTitle: 'Enhance Online Presence',
    backSubtitle: 'Drive User Engagement',
    backDesc: 'Strategically elevate your online presence to engage users effectively and achieve business objectives.',
    backCardOneTitle: 'Optimized Content',
    backCardOneDesc: 'Craft and optimize compelling content to improve website ranking.',
    backCardTwoTitle: 'Social Media Engagement',
    backCardTwoDesc: 'Execute and manage impactful social media campaigns.',
    backCardThreeTitle: 'Content Strategy Development',
    backCardThreeDesc: 'Develop comprehensive content marketing strategies for clients.', 
    } 
)


    function renderCards(arr){

      for(card of productCards){

        //main containers
        const cardContainer = d.createElement('div')
        const frontContainer = d.createElement('div')
        const backContainer = d.createElement('div')
    
        //subElements for frontContainer
        const frontImg = d.createElement('div')
        const spanFrontImg = d.createElement('span')
        spanFrontImg.style.backgroundImage = `url(${card.frontImg})`
        frontImg.classList.add('subscribe__img')
        //Append Elements
        frontImg.appendChild(spanFrontImg)
        console.log(frontImg)
        
        
        //Create Elements and Added classes
        const frontText = d.createElement('div')
        const frontTitleText = d.createElement('p')
        const frontSubtitleText = d.createElement('p')
        frontTitleText.innerText = card.frontTitle
        frontSubtitleText.innerText = card.frontSubtitle
        frontText.classList.add('subscribe__text')
        //Append Elements
        frontText.appendChild(frontTitleText)
        frontText.appendChild(frontSubtitleText)
        
    
        
    
        //Create Elements and Added classes
        const frontServices = d.createElement('div')
        const frontServiceOne = d.createElement('span')
        const frontServiceTwo = d.createElement('span')
        const frontServiceThree = d.createElement('span')
        frontServiceOne.innerText = card.frontServiceOne
        frontServiceTwo.innerText = card.frontServiceTwo
        frontServiceThree.innerText = card.frontServiceThree
        frontServices.classList.add('subscribe__services')
        //Append Elements
        frontServices.appendChild(frontServiceOne)
        frontServices.appendChild(frontServiceTwo)
        frontServices.appendChild(frontServiceThree)
        console.log(frontServices)
    
    
    
        const frontDesc = d.createElement('div')
        const frontPDesc = d.createElement('p')
        frontPDesc.innerHTML = card.frontDesc
        frontDesc.classList.add('subscribe__desc')
        //Append Elements
        frontDesc.appendChild(frontPDesc)
    
        const frontBtn = d.createElement('div')
        const frontBtnAction = d.createElement('button')
        frontBtnAction.setAttribute('id','discoverBtn')
        frontBtn.classList.add('subscribe__btn')
        //Append Elements
        frontBtn.appendChild(frontBtnAction)
        frontBtnAction.innerText = 'Discover'
        console.log(frontBtn)
    
        //Create backElements
        const backTitleContainer = d.createElement('article')
        const backCardsContainer = d.createElement('article')
        backTitleContainer.classList.add('services__card--back__title')
        backCardsContainer.classList.add('services__card--back__cards', 'hide')
        
        //TitleBackElements
        const backHero = d.createElement('div')
        const spanHero = d.createElement('span')
        const backHeroTitle = d.createElement('h2')
        const backHeroSubtitle = d.createElement('p')
        backHeroTitle.innerText = card.backTitle
        backHeroSubtitle.innerText = card.backSubtitle
        spanHero.classList.add('title__icon')
        spanHero.style.backgroundImage = `url(${card.backImg})`
        backHero.classList.add('service__hero')
        //Append Elements
        
        backHero.append(spanHero,backHeroTitle, backHeroSubtitle)
    
    
    
        //Create elements and added classes
        const backAction = d.createElement('div')
        const backActionText = d.createElement('div')
        const backActionTextP = d.createElement('p')
        const backActionBtn = d.createElement('div')
        const backActionBtnView = d.createElement('button')
        backActionBtnView.innerText = 'View'
        backActionBtnView.setAttribute('id', 'design__btn')
        backActionBtn.classList.add('service__action--btn')
        backActionTextP.innerText = card.backDesc
        backActionText.classList.add('service__action--text')
        backAction.classList.add('service__action')
        //Append Elements
        backActionBtn.appendChild(backActionBtnView)
        backActionText.appendChild(backActionTextP)
        backAction.append(backActionText, backActionBtn)
    
        //Elements for first backCardContainer
        const backCardItemOne = d.createElement('div')
        backCardItemOne.classList.add('services__card--back__item', 'hide')
        const backCardItemOneTitle = d.createElement('div')
        backCardItemOneTitle.classList.add('services__card--back__hero')
        const backCardItemOneTitleP = d.createElement('p')
        backCardItemOneTitleP.innerText = card.backCardOneTitle
        const backCardItemOneDesc = d.createElement('p')
        backCardItemOneDesc.innerText = card.backCardOneDesc
        //Append Elements
        backCardItemOneTitle.appendChild(backCardItemOneTitleP)
        backCardItemOne.append(backCardItemOneTitle, backCardItemOneDesc)
    
        
    
        //Elements for Second backCardContainer
        const backCardItemTwo = d.createElement('div')
        backCardItemTwo.classList.add('services__card--back__item', 'hide')
        const backCardItemTwoTitle = d.createElement('div')
        backCardItemTwoTitle.classList.add('services__card--back__hero')
        const backCardItemTwoTitleP = d.createElement('p')
        backCardItemTwoTitleP.innerText = card.backCardTwoTitle
        const backCardItemTwoDesc = d.createElement('p')
        backCardItemTwoDesc.innerText = card.backCardTwoDesc
        //Append Elements
        backCardItemTwoTitle.appendChild(backCardItemTwoTitleP)
        backCardItemTwo.append(backCardItemTwoTitle, backCardItemTwoDesc)
    
        //Elements for Third backCardContainer
        const backCardItemThree = d.createElement('div')
        backCardItemThree.classList.add('services__card--back__item', 'hide')
        const backCardItemThreeTitle = d.createElement('div')
        backCardItemThreeTitle.classList.add('services__card--back__hero')
        const backCardItemThreeTitleP = d.createElement('p')
        backCardItemThreeTitleP.innerText = card.backCardThreeTitle
        const backCardItemThreeDesc = d.createElement('p')
        backCardItemThreeDesc.innerText = card.backCardThreeDesc
        //Append Elements
        backCardItemThreeTitle.appendChild(backCardItemThreeTitleP)
        backCardItemThree.append(backCardItemThreeTitle, backCardItemThreeDesc)
    
    
        //Elements for Fourth Card
        const backCardItemFour = d.createElement('div')
        backCardItemFour.classList.add('services__card--back__item', 'hide')
        const backCardItemFourBtn = d.createElement('button')
        backCardItemFourBtn.setAttribute('id', 'hideCardsBtn')
        //Append Elements
        backCardItemFour.appendChild(backCardItemFourBtn)
        backCardItemFourBtn.innerText = 'Hide'
    
        
        backCardsContainer.append(backCardItemOne,backCardItemTwo,backCardItemThree, backCardItemFour)
        backTitleContainer.append(backHero,backAction)
        backContainer.append(backTitleContainer,backCardsContainer)
        frontContainer.append(frontImg,frontText,frontServices,frontDesc,frontBtn)
        cardContainer.append(frontContainer, backContainer)
        backContainer.classList.add('face', 'services__card--back')
        frontContainer.classList.add('face', 'services__card--front')
        cardContainer.classList.add('services__card')
        cardsContainer.appendChild(cardContainer)
    
        console.log(cardContainer)
        
    }  

    


    }


    window.addEventListener('load', renderCards(productCards))


    const discoverBtns = d.querySelectorAll('#discoverBtn')
    const frontFaces = d.querySelectorAll('.services__card')
    const designBtns = d.querySelectorAll('#design__btn')
    const serviceCardsBack = d.querySelectorAll('.services__card--back__title')
    const backCardsContent = d.querySelectorAll('.services__card--back__cards')
   

    designBtns.forEach((btn, index) => btn.setAttribute('id', `design__btn${index + 1}`));
    serviceCardsBack.forEach((card,index)=> card.setAttribute('id', `serviceCardTitle${index + 1}`))
    backCardsContent.forEach((card,index)=> card.setAttribute('id', `cardContent${index + 1}`))
    discoverBtns.forEach((btn, index) => {
        let iterationCount = 0
        btn.setAttribute('id', `discoverBtn${index + 1}`)
        btn.addEventListener('animationiteration', ()=>{
            iterationCount++
            if(iterationCount>=5){
                btn.style.animation = 'none'
            }
        })
    });


    frontFaces.forEach((face, index) => face.setAttribute('id', `face${index + 1}`));

    discoverBtns.addEventListener('animationiteration', ()=>{
        iterationCount++

        if(iterationCount>=5){
            discoverBtns.style.animation = 'none'
        }
    })

  
    const btnOne = d.querySelector('#discoverBtn1')
    const btnTwo = d.querySelector('#discoverBtn2')
    const btnThree = d.querySelector('#discoverBtn3')
    const faceOne = d.querySelector('#face1')
    const faceTwo = d.querySelector('#face2')
    const faceThree = d.querySelector('#face3')
    const designBtnOne = d.querySelector('#design__btn1')
    const cardTitleOne = d.querySelector('#serviceCardTitle1')
    const backCardOne = d.querySelector('#cardContent1')
    const designBtnTwo = d.querySelector('#design__btn2')
    const cardTitleTwo = d.querySelector('#serviceCardTitle2')
    const backCardTwo = d.querySelector('#cardContent2')
    const designBtnThree = d.querySelector('#design__btn3')
    const cardTitleThree = d.querySelector('#serviceCardTitle3')
    const backCardThree = d.querySelector('#cardContent3')
    const backCardItems = d.querySelectorAll('.services__card--back__item')

    

     function viewCardContent(cardTitle,backCard,face){
        cardTitle.classList.add('hide')
        backCard.classList.remove('hide')

        const children = Array.from(backCard.children)

        if(children.length>0){
            const lastItem = children[children.length - 1]
            const hideBtn = lastItem.querySelector('#hideCardsBtn')
            
            hideBtn.addEventListener('click', ()=>{
                face.style.transform = 'rotateX(0deg)'
                cardTitle.classList.remove('hide')
                backCard.classList.add('hide')
                children.forEach(item => item.style.animation = 'none')
            })
        }


        children.forEach((item, index)=>{
            item.classList.remove('hide')
            item.style.opacity = '0'
            let delay = `${0.2 * index}s`;
            item.style.animation =  `opacityTitleIn ease-in-out 1.5s ${delay} forwards`    
        })

     }

     designBtnOne.addEventListener('click', () => viewCardContent(cardTitleOne , backCardOne , faceOne))
     designBtnTwo.addEventListener('click', () => viewCardContent(cardTitleTwo , backCardTwo , faceTwo))
     designBtnThree.addEventListener('click', () => viewCardContent(cardTitleThree , backCardThree , faceThree))

    
    function discoverCards(btn,face){
        btn.addEventListener('click', () => face.style.transform = 'rotateX(180deg)')
    }

    btnOne.addEventListener('click', discoverCards(btnOne, faceOne))
    btnTwo.addEventListener('click', discoverCards(btnTwo, faceTwo))
    btnThree.addEventListener('click', discoverCards(btnThree, faceThree))

    
   

   



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

