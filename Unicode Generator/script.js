let dateContainer = document.querySelector(".date-container");
let hoursContainer = document.querySelector(".hours");
let minsContainer = document.querySelector(".minutes");
let secsContainer = document.querySelector(".seconds");

const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

setInterval(updateClock,1000);

function updateClock(){
    const today = new Date();

    let hours = formatTime(today.getHours());
    let minutes = formatTime(today.getMinutes());
    let seconds = formatTime(today.getSeconds());

    let day = weekdays[today.getDay()];
    let date = today.getDate();
    let month = months[today.getMonth()];

    hoursContainer.textContent = hours+":";
    minsContainer.textContent = minutes+":";
    secsContainer.textContent = seconds;

    dateContainer.innerHTML = `<p>${day}</p><span>${date}</span><p>${month}</p>`

}

function formatTime(time){
    return time < 10 ? "0"+time : time;
}