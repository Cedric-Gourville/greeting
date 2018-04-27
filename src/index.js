import "./assets/scss/main.scss";

const textDisplay = document.getElementById('js_textDisplay');
const inputName = document.getElementById('js_inputName');
const resetButton = document.getElementById('js_reset');

reset();

inputName.addEventListener('keypress',function(event){
    if(event.keyCode === 13){
        greeting();
    }
});

resetButton.addEventListener('click', reset);

function greeting(){
    if(inputName.value === ""){
        alert('Enter a name Please !');
    }
    else{
    textDisplay.textContent = "Hello " + inputName.value + " ! Have a nice day !";
    document.body.style.background = rgbColor();
    }
}

function rgbColor(){
    let r = Math.floor(Math.random()*255 +1); // random num from 0 to 255 for red
    let g = Math.floor(Math.random()*255 +1); // random num from 0 to 255 for green
    let b = Math.floor(Math.random()*255 +1); // random num from 0 to 255 for blue
    return "rgb(" + r + ", " + g + ", " + b + ")"; 
};

function reset(){
    textDisplay.textContent = "";
    inputName.value = "";
    document.body.style.background = '#fff';
}

