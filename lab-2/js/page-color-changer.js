// 1. Wrap everything in an event listener to wait for the HTML to load
window.addEventListener('DOMContentLoaded', function() {

    // create consts of the three sliders
const redSlider = document.querySelector('#red');
const greenSlider = document.querySelector('#green');
const blueSlider = document.querySelector('#blue');

function bgChange(){
     // Grab the LATEST values every time a slider moves
    let redValue = Number(redSlider.value);
    let greenValue = Number(greenSlider.value);
    let blueValue = Number(blueSlider.value);

     // Update the background color
    let bgColor = `rgb(${redValue} ,${greenValue} ,${blueValue})`;
    document.documentElement.style.backgroundColor = bgColor;
}

// Add event listeners to all sliders
redSlider.addEventListener('input',bgChange);
greenSlider.addEventListener('input',bgChange);
blueSlider.addEventListener('input',bgChange);
});