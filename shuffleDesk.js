const suits = ["Spades", "Diamonds", "Club", "Heart"];
const values = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "JACK",
  "QUEEN",
  "KING",
];

let deck =[];

for(let i = 0; i< suits.length; i++){
    for(let x = 0; x< values.length; i++){
        let card = { Value: values[x], Suit: suits[i]}
        deck.push(card);
    }
}
for(let i= deck.length - 1; i> 0; i--){
    let j = Math.floor(Math.random()* i)
     let temp = deck[i];
     deck[i] = deck[j];
     deck[j] = temp;
}
console.log("The first five cards are: ");

for (let i = 0; i < 5; i++) {
  console.log(`${deck[i].Value} of ${deck[i].Suit}`);
}
