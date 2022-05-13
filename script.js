const cards = document.querySelectorAll('.card');
let hasFlippedCard = false
let firstCard, secondCard;
let lockBoard = false;

function flipCard(){
    if(lockBoard) return;
    if(this ===  firstCard) return;

    this.classList.add('flip');
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}

function checkForMatch(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
        return;
    }

    unFlipCards();

}

function disableCards(){
    firstCard.removeEventListener('click', firstCard);
    secondCard.removeEventListener('click', secondCard);
    resetBoard();
}

function unFlipCards(){
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false;
          resetBoard();
    }, 1000);
}
 function resetBoard(){
     [hasFlippedCard , lockBoard] = [false, false];
     [firstCard, secondCard] = [ null, null];
 }

cards.forEach( (card) => {
    card.addEventListener('click',flipCard)
})