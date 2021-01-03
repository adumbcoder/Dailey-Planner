$(document).ready(function() {

let submit = document.querySelector('#submit');
let listEl = document.querySelector('#dailyPlannerList');
let errorMsg = document.querySelector('.errorMsg');
let confirm = document.querySelector('.confirmation');


setInterval(() => {
    let todayDate = new Date();
    let hour = todayDate.getHours();
    let curMin = todayDate.getMinutes();
    let curSec = todayDate.getSeconds()

//take the date and format it to 12 hours
let curHour = hour % 12;
curHour = curHour ? curHour : 12;
// sets am and pm 
let amPm = curHour >= 12 ? ' am' : ' pm';
// creates a string for the date and time, makes sure if the month, day, hour, minutes and seconds are less then 10 that it adds a 0 to make a nicer format
let myTime = (curHour < 10 ? '0' : '') + curHour + ':' + (curMin < 10 ? '0' : '') + curMin + ':' + (curSec < 10 ? '0' : '') + curSec + amPm;
//sets the text of the html format  with the strings created above
document.querySelector('#currentTime').textContent = myTime;

//same thing except for the date
let curYear = todayDate.getFullYear();
let curMonth = todayDate.getMonth() + 1;
let curDay = todayDate.getDate();

document.querySelector('#month').textContent = (curMonth < 10 ? '0' : '') + curMonth;
document.querySelector('#day').textContent = (curDay < 10 ? '0' : '') + curDay;
document.querySelector('#year').textContent = curYear;
}, 500);

function genList() {
    


    let times = ['12:00 a.m.', '1:00 a.m.', '2:00 a.m.', '3:00 a.m.', '4:00 a.m.', '5:00 a.m.', '6:00 a.m.', '7:00 a.m.', '8:00 a.m.', '9:00 a.m.', '10:00 a.m.', '11:00 a.m.','12:00 p.m.', '1:00 p.m.', '2:00 p.m.', '3:00 p.m.', '4:00 p.m.', '5:00 p.m.', '6:00 p.m.', '7:00 p.m.', '8:00 p.m.', '9:00 p.m.', '10:00 p.m.', '11:00 p.m.']

    for(let i = 0; i < times.length; i++){
        let time = times[i];
        let newTimeBlock = document.createElement('div')
        newTimeBlock.classList.add('hour', 'row');
        newTimeBlock.id = time;
        document.querySelector('.dailyList').appendChild(newTimeBlock);
        
        //add the individual col per row
        //time Column
        let timeCol = document.createElement('div');
        let timeText = document.createElement('p');
        timeCol.classList.add('col-2')
        timeText.textContent = time;
        newTimeBlock.appendChild(timeCol);
        timeCol.appendChild(timeText);

        //input column
        let inputCol = document.createElement('div');
        let inputText = document.createElement('input');
        inputCol.classList.add('col-9')
        inputText.style.width = '100%';
        newTimeBlock.appendChild(inputCol);
        inputCol.appendChild(inputText);

        //save button column
        let saveCol = document.createElement('div');
        let saveBut = document.createElement('button')
        saveCol.classList.add('col-1');
        saveBut.textContent = 'Save';
        newTimeBlock.appendChild(saveCol);
        saveCol.appendChild(saveBut);

        

        



    }
    return
}
genList();
});
