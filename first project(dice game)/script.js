var randomNumber1=Math.floor(Math.random()*6)+1;//random number from 1-6

var randomNumberimage="dice"+ randomNumber1+".png";//dice image\

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomNumberimage);

var randomNumber2=Math.floor(Math.random()*6)+1;//random number from 1-6


var randomNumberimage2="dice"+ randomNumber2+".png";//dice image\


var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomNumberimage2);

if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩PLAYER 1 WINS";

}

else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩PLAYER 2 WINS";
}
else {
    document.querySelector("h1").innerHTML = "DRAW";

}
