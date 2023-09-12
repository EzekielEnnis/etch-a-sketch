const body = document.querySelector("body")
const container = document.querySelector("#sketch-container")
// Slider
const slider = document.querySelector(".slider > input");
const sliderText = document.querySelector("#rangeValue");
const sliderButton = document.querySelector("#gridSize");
const resetButton = document.querySelector("#reset");
let currentGridWidth = +sliderText.textContent;

const settings = document.querySelector(".settings")
const allClrBtns = []
const colors = [
    "black",
    "red",
    "orange", 
    "yellow",
    "green",
    "blue",
    "purple",
    "white"
]

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
        container.childNodes[i].style["background-color"] = "transparent"
        
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

function createColors(){
    colors.forEach(color => {
        let clrBtn = document.createElement("button")
        clrBtn.classList.add("clrBtn")
        clrBtn.id = color
        if(color === "black") clrBtn.classList.add("checked");
        settings.insertBefore(clrBtn, resetButton)
        allClrBtns.push(clrBtn)
    })
}

function setColor(box){
    let colors = document.querySelectorAll(".clrBtn")
    if (box.className !== "sketch-box") return;
    colors.forEach(color => {
        if (color.className.split(" ")[1] === "checked") {
            box.style["background-color"] = `${color.id}`
            //box.style.cssText = `background-color: ${color.value};`
        }
    })
}

function changeColor(btn) {
    let color = document.querySelector(".checked")
    color.classList.remove("checked")
    btn.classList.add("checked")
}

// Called when slider changes
function slide(){
    sliderText.textContent = +slider.value
}




/* EVENTS */

// Load grid on start
body.onload = createGrid(+sliderText.textContent)
body.onload = createColors()


resetButton.addEventListener("click", () => reset())

sliderButton.addEventListener("click", () => apply());

// Sketch
container.addEventListener("mouseover", (e) => setColor(e.target));

allClrBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => changeColor(e.target))
})

    /* 
    colors.forEach(color => {
        let clrBtn = document.createElement("input")
        clrBtn.type = "radio"
        clrBtn.name = "clrbtn"
        clrBtn.value = color
        clrBtn.id = color
        if(color === "black") clrBtn.checked = "checked";
        settings.insertBefore(clrBtn, resetButton)
    })
    */