const cards = [
  {
    image: "https://deckofcardsapi.com/static/img/AH.png",
    value: "ACE",
    suit: "HEARTS",
    code: "AH",
  },
  {
    image: "https://deckofcardsapi.com/static/img/KH.png",
    value: "KING",
    suit: "HEARTS",
    code: "KH",
  },
  {
    image: "https://deckofcardsapi.com/static/img/QH.png",
    value: "QUEEN",
    suit: "HEARTS",
    code: "QH",
  },
  {
    image: "https://deckofcardsapi.com/static/img/JH.png",
    value: "JACK",
    suit: "HEARTS",
    code: "JH",
  },
  {
    image: "https://deckofcardsapi.com/static/img/0H.png",
    value: "10",
    suit: "HEARTS",
    code: "0H",
  },
];

var main =document.querySelector("#main");

const newCards = [];
 
function render(){
  main.innerHTML = newCards
 .map(
    (paper,index)=>
      `<div id ="id_${index}" data-id="${index}" class='notSelected'>
        <img src="${paper.image}" data-index="${index}" alt="${paper.value}+" of "+${paper.suit}">
      </div>
   `
  ).join(" ");
  const counts = document.querySelectorAll('img[data-index]');
  counts.forEach ((btn)=> 
  btn.addEventListener("click",show,false),

  );

};

function click(passedId){
  document.getElementById(passedId).classList.contains('selected') ? document.getElementById(passedId).classList.replace('selected', 'notSelected') : document.getElementById(passedId).classList.replace('notSelected', 'selected');
}
  
function show(){

  const arrayIndex = this.dataset.index;
  const person = newCards[arrayIndex];
  console.log(person.value+" of "+ person.suit);
  click('id_'+arrayIndex);
};

function addCard(){
  const lastElementInArray = cards.shift();
  newCards.push(lastElementInArray);
  render();
 };
 const btn = document.querySelector("#dealbtn");
 btn.addEventListener("click",addCard);

