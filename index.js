var d1 = Math.ceil(Math.random()*6);
var d2 = Math.ceil(Math.random()*6);

document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + d1 + ".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + d2 + ".png");

if(d1>d2){
    document.querySelector("div h1").innerHTML = "Player 1 wins";
    
} else if(d2>d1){
    document.querySelector("div h1").innerHTML = "Player 2 wins";
}