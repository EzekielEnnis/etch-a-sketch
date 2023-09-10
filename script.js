
const container = document.querySelector(".sketch-container");
let currentSldrVal = 16;

// CreateBox
function createBox(){
    //Calculate basis %
    let basis = (currentSldrVal/(currentSldrVal*currentSldrVal))*100; 
    const box = document.createElement("div");
    box.classList.add("sketch-box");
    // set basis dynamically when created to prevent mistakes
    box.style.cssText = `flex-basis: ${basis}%;`;
    return box;
}

// Create grid
function createGrid(size){
    let gridSize = size*size;

    for (let i = 0; i < gridSize; i++) {
        container.appendChild(createBox());
    };
};


// Append box to grid
function girdAppend(newSize) {
    // How many boxes need to be added
    let dif = (newSize*newSize)-(currentSldrVal*currentSldrVal)
    for (let i = 0; i < dif; i++) {
        const element = array[i];
        container.appendChild()
    }
}

// Remove box from grid
function girdAppend(newSize) {
    // How many boxes need to be added
    let dif = (newSize*newSize)-(currentSldrVal*currentSldrVal)
    for (let i = 0; i < dif; i++) {
        const element = array[i];
        // Remove box
    }
}

// Load grid on start
const body = document.querySelector("body")
body.onload = createGrid(currentSldrVal)

// Sketch
let sketchBox = document.querySelectorAll(".sketch-box");
sketchBox.forEach((box) => {
    box.addEventListener("mouseover", (e)=> {
        e.currentTarget.classList.add("sketch");
    })
})

// Change grid size

let slider = document.querySelector(".slider");
let sliderText = slider.querySelector("#rangeValue");
slider = slider.querySelector("input");
console.log(slider)
let sliderButton = document.querySelector("#gridSize");

// Called when slider changes
function slide(){
    sliderText.textContent = +slider.value
}

sliderButton.addEventListener("click", (e) => {
    let sldrVal = +slider.value;
    let textVal = +sliderText.textContent;
    if(sldrVal === currentSldrVal) console.log("Were the same");
    else if(sldrVal < currentSldrVal) {
        currentSldrVal = sldrVal;
        console.log("Slider less than current")
        // girdRemove(newVal)
    }
    else if(sldrVal > currentSldrVal) {
        currentSldrVal = sldrVal;
        console.log("Slider greater than current")
        // girdRemove(newVal)
    };
});

