// Create arrays for card names and the deck
let cardReference = ['JOKER', 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let cardDeck = [];

// Make spades
for (co = 1 ; co <= 13 ; co++) {
 cardDeck.push({color: 'black', suit: '&spades;', number: cardReference[co]})
}
// Make hearts
for (co = 1 ; co <= 13 ; co++) {
 cardDeck.push({color: 'red', suit: '&hearts;', number: cardReference[co]})
}
// Make clubs
for (co = 1 ; co <= 13 ; co++) {
 cardDeck.push({color: 'black', suit: '&clubs;', number: cardReference[co]})
}
// Make diamonds
for (co = 1 ; co <= 13 ; co++) {
 cardDeck.push({color: 'red', suit: '&diamondsuit;', number: cardReference[co]})
}

// Make the array for the 4 cards in the hand
let hand = [];
for (co = 0 ; co <= 3 ; co++) {
 hand.push({suit: ' ', number: ' '})
}

// DEALS 4 new cards, but not until the last hand has been ended.
// If any of the cards still have color assignment or reveal class tags, this button does not let you start a new deal
function deal() {
  console.log(document.getElementById(1).classList[2]);
  if (document.getElementById(1).classList[2] == 'card-bg') {
   for (co = 1 ; co <= 4 ; co++) {
    // Count the cards left in the deck
    let cardsLeft = cardDeck.length;
    if (cardsLeft > 4) {
    // Choose a random card from the deck
    let pickedCard = getRandom(0, cardsLeft - 1);
    // Insert the value of the card to hand
    hand[co - 1].suit = cardDeck[pickedCard].suit;
    hand[co - 1].number = cardDeck[pickedCard].number;
    document.getElementById('0' + co).innerHTML = hand[co - 1].number + '<br />' + hand[co - 1].suit;
    // Give the card a color based on suit
    classParadox = document.getElementById(co).classList;
     if (classParadox[2] == 'card-bg') {
      if (cardDeck[pickedCard].color === 'red') {
       classColor = document.getElementById(co).className;
       classColor = classColor.replace('card-bg', 'card-bg-red');
       document.getElementById(co).className = classColor;}
      else {
       classColor = document.getElementById(co).className;
       classColor = classColor.replace('card-bg', 'card-bg-black');
       document.getElementById(co).className = classColor;}
     } else if (classParadox[2] == 'card-bg-red') {
      if (cardDeck[pickedCard].color === 'red') {
       classColor = document.getElementById(co).className;
       classColor = classColor.replace('card-bg-red', 'card-bg-red');
       document.getElementById(co).className = classColor;}
      else {
       classColor = document.getElementById(co).className;
       classColor = classColor.replace('card-bg-red', 'card-bg-black');
       document.getElementById(co).className = classColor;}
     } else if (classParadox[2] == 'card-bg-black') {
      if (cardDeck[pickedCard].color === 'red') {
       classColor = document.getElementById(co).className;
       classColor = classColor.replace('card-bg-black', 'card-bg-red');
       document.getElementById(co).className = classColor;}
      else {
       classColor = document.getElementById(co).className;
       classColor = classColor.replace('card-bg-black', 'card-bg-black');
       document.getElementById(co).className = classColor;}
     }
     // Remove the used card from the deck
     cardDeck.splice(pickedCard, 1);
    } else {
     alert("You have no more cards in the deck, stop playing! (Or refresh the page and start over.)");
     break;
    }
   }
  } else {
   alert('You have to end the previous hand before you can deal a new one.')
  }
}
// Reveals the 4 cards dealt in the blind
function reveal() {
 revealCheck = document.getElementById('1').classList[3];
 if (revealCheck == 'red-reveal' || revealCheck == 'black-reveal') {
  alert('You have already revealed the cards, no need to reveal them more.')
 } else {
  for (co = 1 ; co <= 4 ; co++) {

  classParadox = document.getElementById(co).classList;
  console.log(classParadox);

   if (classParadox[2] == 'card-bg-red') {
    classColor = document.getElementById(co).className;
    classColor = classColor.replace('card-bg-red', 'card-bg-red red-reveal');
    document.getElementById(co).className = classColor;
   } else {
    classColor = document.getElementById(co).className;
    classColor = classColor.replace('card-bg-black', 'card-bg-black black-reveal');
    document.getElementById(co).className = classColor;
   }
  }
 }
}
// Hides the revealed cards, removes color assignment and reveal tags
function newhand() {
 for (co = 1 ; co <= 4 ; co++) {
  classParadox = document.getElementById(co).classList;
  console.log(classParadox);
  if (classParadox[3] == 'red-reveal') {
   classColor = document.getElementById(co).className;
   classColor = classColor.replace('card-bg-red red-reveal', 'card-bg');
   document.getElementById(co).className = classColor;
  } else {
   classColor = document.getElementById(co).className;
   classColor = classColor.replace('card-bg-black black-reveal', 'card-bg');
   document.getElementById(co).className = classColor;
  }
 }
}