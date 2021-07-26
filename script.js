let player = {
  name: "Player",
  chips: 100,
};

let cards = [];
let hasBlackjack = false;
let message = "";
let isAlive = false;

let sum = 0;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": £" + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 11) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";
  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  if (sum <= 20) {
    message = "Do you wanna draw a new card?";
  } else if (sum === 21) {
    message = "Kawabagaaaa!!!";
    hasBlackjack = true;
  } else {
    message = "GAME OVER!!!";
    isAlive = false;
  }
  messageEl.textContent = message;
}
function newCard() {
  if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
