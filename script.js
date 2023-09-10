const body = document.querySelector("body")
const container = document.querySelector("#sketch-container")
// Slider
const slider = document.querySelector(".slider > input");
const sliderText = document.querySelector("#rangeValue");
const sliderButton = document.querySelector("#gridSize");
const resetButton = document.querySelector("#reset");
let currentGridWidth = +sliderText.textContent;

function createBox(size){
    // Make box
    const box = document.createElement("div");
    box.classList.add("sketch-box")
    box.style.width = `${size}px`
    box.style.height = `${size}px`
    return box;
};

function createGrid(size){
    // Make grid
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            container.appendChild(createBox(container.clientWidth/size));
        }
        
    }
};

function reset(){
    // Clear Grid of Sketch
    for (let i = 0; i < container.childNodes.length; i++) {
        container.childNodes[i].className = "sketch-box"
        
    }
};

function apply(){
    let sldrVal = +slider.value;
    if(sldrVal === currentGridWidth) console.log("Were the same");
    else {
    while (container.firstChild){
        container.removeChild(container.firstChild)
    }
    createGrid(+sliderText.textContent)
    currentGridWidth = sldrVal
    };
};

// Load grid on start
body.onload = createGrid(+sliderText.textContent)




// Called when slider changes
function slide(){
    sliderText.textContent = +slider.value
}

/* EVENTS */

resetButton.addEventListener("click", () => reset())

sliderButton.addEventListener("click", () => apply());

// Sketch
    container.addEventListener("mouseover", (e)=> {
        if (e.target.className === "sketch-box") {
            e.target.classList.add("black-clr")
        };
    })