var randomnumber1 = Math.floor(Math.random() * 6) +1;

var diceImages1 = "images/dice" + randomnumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , diceImages1);


var randomnumber2 = Math.floor(Math.random() * 6) +1;

var diceImages2 = "images/dice" + randomnumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , diceImages2);


if(randomnumber1 > randomnumber2)
document.querySelector("h1").innerText="Player 1 Wins 🎉";
else if(randomnumber2 > randomnumber1)
document.querySelector("h1").innerText="Player 2 Wins 🎉";
else 
document.querySelector("h1").innerText="Draw!!";
