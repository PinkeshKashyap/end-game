var readlineSync = require("readline-sync");
var userName = readlineSync.question("Whats your name? ");

console.log("HEYY!! " + userName+ " welcome, to the game.");
console.log("----------");
console.log("    ");
var score= 0;
function play(ques, ans){
  var userAnswer = readlineSync.question(ques);

  if(userAnswer === ans){
    console.log("Right")
    score++;
  }
  else{
    console.log("Wrong"); 
  }
  console.log("Your current score is: "+ score);
  console.log("----------");
  console.log("    ");
}

var questions = [{
  q: "where do Pinkesh live? (City name) ",
  a: "indore" },{
  q: "what is the favourite sabji of Pinkesh? ",
  a: "bhindi"},{
  q: "what is the favourite game of Pinkesh? ",
  a: "football"},{
  q: "what recent place you visited with Pinkesh? (restaurant name) ",
  a: "apna sweets"},{
  q: "what is the favourite flavour of icecream of Pinkesh? ",
  a: "black currant"},{
  q: "what is the favourite fastfood of Pinkesh? ",
  a: "white sauce pasta"},{
  q: "which girl pinkesh loves the most? ",
  a: "janvi"},{
  q: "what is the name of male BF of pinkesh? (clg frnd) ",
  a: "varun"},{
  q: "what is the favourite color of pinkesh? ",
  a: "purple"},{
  q: "what is the name mother's of pinkesh ? ",
  a: "lalita"}
                 ]

for(var i=0; i<questions.length; i++){
  (play(questions[i].q,questions[i].a));
}

console.log("YAY! YOUR FINAL SCORE IS: "+ score);
console.log("    ");

if(score>=9){
  console.log("Result: you might be very closest one to Pinkesh. ");
}
else if(score<=8 && score>=5){
  console.log("Result: you might be a good friend of Pinkesh. ")
}
else{
  console.log("Result: you are just a friend of Pinkesh. ")
}
console.log("    ");
console.log("THE END! thanks for playing, Love from Pinkesh");
