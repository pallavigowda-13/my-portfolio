let text = ["Frontend Developer", "Python Programmer", "ML Enthusiast"];

let index = 0;
let char = 0;

function typing(){

if(char < text[index].length){

document.getElementById("typing").innerHTML += text[index].charAt(char);

char++;

setTimeout(typing,100);

}

else{

setTimeout(erase,1000);

}

}

function erase(){

if(char > 0){

document.getElementById("typing").innerHTML = text[index].substring(0,char-1);

char--;

setTimeout(erase,50);

}

else{

index++;

if(index >= text.length){

index = 0;

}

setTimeout(typing,200);

}

}

typing();


// DARK MODE

let darkBtn = document.getElementById("darkMode");

darkBtn.onclick = function(){

document.body.classList.toggle("dark");

}