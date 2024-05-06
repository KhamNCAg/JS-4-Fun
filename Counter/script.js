document.getElementById('incrementBtn').addEventListener('click',incrementFn);
document.getElementById('decrementBtn').addEventListener('click',decrementFn);
document.getElementById('resetBtn').addEventListener('click',resetFn);

let cntrDisplay = document.getElementById('counterDisplay');
let cntrVlu = 0;

function updateCntrDisplay(){
    cntrDisplay.textContent = cntrVlu;
}

function incrementFn(){
    cntrVlu++;
    updateCntrDisplay();
}

function decrementFn(){
    cntrVlu--;
    updateCntrDisplay();
}

function resetFn(){
    cntrVlu = 0;
    updateCntrDisplay();
}