const redSlider = document.getElementById("redSlider");
const greenSlider = document.getElementById("greenSlider");
const blueSlider = document.getElementById("blueSlider");

const redVlu = document.getElementById("redVlu");
const greenVlu = document.getElementById("greenVlu");
const blueVlu = document.getElementById("blueVlu");

const colorBox = document.getElementById("color-box");
const copyButton = document.getElementById("copyButton");
const inputRGB = document.getElementById("inputType");

redSlider.addEventListener('input',updateColor);
greenSlider.addEventListener('input',updateColor);
blueSlider.addEventListener('input',updateColor);
copyButton.addEventListener('click',copyColor);

updateColor();

function updateColor(){
    const varRed = redSlider.value;
    const varGreen = greenSlider.value;
    const varBlue = blueSlider.value;

    const rgbColor = `RGB(${varRed},${varGreen},${varBlue})`
    colorBox.style.backgroundColor = rgbColor;

    redVlu.textContent = varRed;
    greenVlu.textContent = varGreen;
    blueVlu.textContent = varBlue;

    inputRGB.textContent = rgbColor;
}

function copyColor(){
    const varRed = redSlider.value;
    const varGreen = greenSlider.value;
    const varBlue = blueSlider.value;

    const rgbColor = `RGB(${varRed},${varGreen},${varBlue})`

    navigator.clipboard.writeText(rgbColor)
    .then(()=>{
        alert(`RGB Color Value copied to Clipboard : ${rgbColor}.`);
    })
    .catch((error)=>{
        console.error("Failed to copy RGB Values",error);
    })
}