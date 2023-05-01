function dice() {
var r1=Math.floor(Math.random()*6);
var r2=Math.floor(Math.random()*6);
var ar=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

document.querySelector(".img1").setAttribute("src",ar[r1]);
document.querySelector(".img2").setAttribute("src",ar[r2]);
if(r1===r2)
{
	document.getElementsByTagName("h1")[0].innerHTML="Draw";
}
else if(r1<r2){
	document.getElementsByTagName("h1")[0].innerHTML="Player 2 Wins";
}
else{
document.getElementsByTagName("h1")[0].innerHTML="Player 1 Wins";
}
}

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}