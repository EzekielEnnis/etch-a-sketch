const body = document.querySelector("body")
// Slider
let slider = document.querySelector(".slider > input");
let sliderText = document.querySelector("#rangeValue");
let sliderButton = document.querySelector("#gridSize");

function createBox(){
    // Make box
};

function createGrid(){
    // Make grid
};

function reset(){
    // Clear Grid of Sketch
};

function apply(){
    let sldrVal = +slider.value;
    let textVal = +sliderText.textContent;
    if(sldrVal === currentGridWidth) console.log("Were the same");
    else console.log("Change")
};

// Load grid on start
body.onload = createGrid(+sliderText.textContent)

// Sketch
sketchBox.forEach((box) => {
    box.addEventListener("mouseover", (e)=> {
        e.currentTarget.classList.add("sketch");
    })
})


sliderButton.addEventListener("click", (e) => apply());

// Called when slider changes
function slide(){
    sliderText.textContent = +slider.value
}

