const cardArray = [

    {
        name:'fries',
        img: 'images/fries.png'
    },

    {
        name:'cheesburger',
        img:"images/cheeseburger.png",

    },
    {
        name:'hotdog',
        img:'images/hotdog.png',

    },

    {
        name:'ice-cream',
        img:'images/ice-cream.png',

    },
    {
        name:'milkshake',
        img:'images/milkshake.png',

    },
    {
        name:'pizza',
        img:'images/pizza.png',

    },
    {
        name:'fries',
        img: 'images/fries.png'
    },

    {
        name:'cheesburger',
        img:'images/cheeseburger.png',

    },
    {
        name:'hotdog',
        img:'images/hotdog.png',

    },

    {
        name:'ice-cream',
        img:'images/ice-cream.png',

    },
    {
        name:'milkshake',
        img:'images/milkshake.png',

    },
    {
        name:'pizza',
        img:'images/pizza.png',
        
    }   
];

cardArray.sort(() => 0.5 - Math.random())  // sort method works to compare two values, Math.random returns number from 0 to less than -1. 
                                           // the total thing we are doing here is to take a number and sort it randomly.
console.log(cardArray);
const reslutDisplay = document.querySelector('#results')

const gridDisplay = document.querySelector('#grid')           // querySelector search's every id and looks for ID grid.
let  cardsChosen = []                                        // used to store the flipped cards
let cardsChosenIds = []
const cardWon = []


function creatBoard() {


    for(var i = 0 ; i < cardArray.length ; i++)
    {
      const card =   document.createElement('img')
         card.setAttribute('src', 'images/blank.png')
         card.setAttribute('data-id', i) 
         card.addEventListener('click', flipcard)           // works when u click some card it calls flipcard function 
         gridDisplay.appendChild(card)
         
        }

}


creatBoard()

function checkMatch(){
    const cards = document.querySelectorAll('img')                  // querySelector searches through all the elements in HTML
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    console.log(cards) 
    console.log('check for match!')
    if(optionOneId == optionTwoId){
        alert('you have clicked the same image!')
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
    }
    
    if(cardsChosen[0]==cardsChosen[1])
    {
        alert('You Found a match ')
       cards[optionOneId].setAttribute('src', 'images/white.png') // once the cards match the attribute is changed to image/white.png 
       cards[optionTwoId].setAttribute('src', 'images/white.png')
       cards[optionOneId].removeEventListener('click', flipcard)
       cards[optionTwoId].removeEventListener('click', flipcard)
       cardWon.push(cardsChosen)
    }
    else{
        cards[optionOneId].setAttribute('src', 'image/blank.png')
        cards[optionTwoId].setAttribute('src', 'image/blank.png')
        alert('sorry try again')
    }

        reslutDisplay.textContent = cardWon.length
        cardsChosen = []                                    // once the cards are matched new of the chosen one is cleared.
        cardsChosenIds = []                                 // same with id.

        if(cardWon.length == (cardArray.length/2)){
            reslutDisplay.textContent = 'congratulations' 

        }
    }


function flipcard() {                                       // Deals with the fliping of card 
    let cardId = this.getAttribute('data-id')               // this (keyword)  lets us gets its data id


    console.log(cardArray[cardId].name)                                       //in CardArray we pick the id 
    cardsChosen.push(cardArray[cardId].name)
    console.log('clicked', cardId)                          // displays the CardID which is clicked
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)        
    if(cardsChosen.length === 2 ) 
        setTimeout( checkMatch, 500) 
    }
