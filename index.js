
// declaring and setting variables
const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

//function for clicking the button
myButton.onclick = function(){
    randomNum1= Math.floor(Math.random() * max) + min;
    randomNum2= Math.floor(Math.random() * max) + min;
    randomNum3= Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;


}