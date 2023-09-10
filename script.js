const body = document.querySelector("body")



// Load grid on start
body.onload = createGrid(currentGridWidth)

// Sketch
sketchBox.forEach((box) => {
    box.addEventListener("mouseover", (e)=> {
        e.currentTarget.classList.add("sketch");
    })
})

// Slider
let slider = document.querySelector(".slider");
let sliderText = slider.querySelector("#rangeValue");
slider = slider.querySelector("input");
let sliderButton = document.querySelector("#gridSize");

sliderButton.addEventListener("click", (e) => {
    let sldrVal = +slider.value;
    let textVal = +sliderText.textContent;
    if(sldrVal === currentGridWidth) console.log("Were the same");
    else console.log("Change")
});

// Called when slider changes
function slide(){
    sliderText.textContent = +slider.value
}

