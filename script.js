
const container = document.querySelector(".sketch-container");

function createGrid(size){
    let gridSize = size*size;

// find percentage of space the box should take up (basis)
    let basis = (size/gridSize)*100; 
    for (let i = 0; i < gridSize; i++) {
        const box = document.createElement("div");
        box.classList.add("sketch-box");
        // set basis dynamically when created to prevent mistakes
        box.style.cssText = `flex-basis: ${basis}%;`;
        container.appendChild(box);
    };
};

// Append box to grid
function girdAppend(currentSize, newSize) {
    // How many boxes need to be added
    let dif = (newSize*newSize)-(currentSize*currentSize)
    for (let i = 0; i < dif; i++) {
        const element = array[i];
        // Append box
    }
}

// Remove box from grid
function girdAppend(currentSize, newSize) {
    // How many boxes need to be added
    let dif = (newSize*newSize)-(currentSize*currentSize)
    for (let i = 0; i < dif; i++) {
        const element = array[i];
        // Remove box
    }
}

// Load grid on start
const body = document.querySelector("body")
body.onload = createGrid(16)

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

sliderButton.addEventListener("click", (e) => {
    let sldrVal = +slider.value;
    let textVal = +sliderText.textContent;
    if(sldrVal === textVal) console.log("Were the same");
    else if(sldrVal < textVal) {
        // girdRemove(currentVal, newVal)
        console.log("Slider less than current")
        sliderText.textContent = sldrVal
    }
    else if(sldrVal > textVal) {
        // girdRemove(currentVal, newVal)
        console.log("Slider greater than current")
        sliderText.textContent = sldrVal
    };
});

