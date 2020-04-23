const cards = document.querySelectorAll("#card li");
console.log(cards);

const resultArray = [];
const cardArray = [];
const finishArray = [];


function turnCard(){
    resultArray.push(card.dataset("click"));
    console.log(resultArray);
}

function clickCard(i){
    cards[i].addEventListener("click",turnCard);
}

clickCard();