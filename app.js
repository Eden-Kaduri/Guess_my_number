const rand = Math.floor(Math.random() * 20) + 1;
var tries= 3;
const userGuest=document.querySelector('#number-form');
const card=document.querySelector('.card');
const heading=document.querySelector('h1');
var userGuess=document.querySelector('#sub');
userGuest.addEventListener('submit', isTrue);
const btn=document.querySelector('.btn');



function isTrue(e){



    if(rand == userGuess.value){
    document.body.style.backgroundColor="green";
    card.style.backgroundColor="green";
    heading.textContent="Congrats ! you guessed right";

    }else{
    document.body.style.backgroundColor="red";
    card.style.backgroundColor="red";
    heading.textContent="Wrong guess";
}

e.preventDefault();
}