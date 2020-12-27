
setInterval(() => {
let todayDate = new Date();
let curYear = todayDate.getFullYear();
let curMonth = todayDate.getMonth();
let curDay = todayDate.getDate();
let hour = todayDate.getHours();
let curMin = todayDate.getMinutes();
let curSec = todayDate.getSeconds()
//take the date and format it to 12 hours
let curHour = hour % 12;
curHour = curHour ? curHour : 12;
// sets am and pm 
let amPm = curHour >= 12 ? ' am' : ' pm';
// creates a string for the date and time, makes sure if the month, day, hour, minutes and seconds are less then 10 that it adds a 0 to make a nicer format
let myDate = (curMonth < 10 ? '0' : '')  + curMonth + '/' + (curDay < 10 ? '0' : '') + curDay + '/' + curYear;
let myTime = (curHour < 10 ? '0' : '') + curHour + ':' + (curMin < 10 ? '0' : '') + curMin + ':' + (curSec < 10 ? '0' : '') + curSec + amPm;
//sets the text of the html format  with the strings created above
document.querySelector('#currentDay').textContent = myDate;
document.querySelector('#currentTime').textContent = myTime;
}, 500);


//code
let myTimeContainer = document.querySelector(".container");
let userInput = document.querySelector("#userInput");
let errorMsg = document.querySelector("#errorMsg");
let confirm = document.querySelector("#confirmation");
let save = document.querySelector("#save");



//make the time blocks
let newTimeBlock = document.createElement('div');

//check to see if data is entered
function dataCheck() {
    if(userInput.value == ''){
        errorMsg.setAttribute('aria-hidden', false);
        errorMsg.textContent = "You must enter information before you can save it!";
        confirmation.setAttribute('aria-hidden', true);
    } else {
        confirmation.setAttribute('aria-hidden', false);
        confirmation.textContent = "Your event was saved successfully!";
        errorMsg.setAttribute('aria-hidden', true);
    }
    
};

save.addEventListener('click', function(){
    dataCheck();

})