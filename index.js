
var diceNumber1 = Math.floor(Math.random() * 6 + 1);
var diceNumber2 = Math.floor(Math.random() * 6 + 1);
document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + diceNumber1 + ".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + diceNumber2 + ".png");
