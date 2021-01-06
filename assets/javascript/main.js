window.onload = function()
{
    

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

colorChange();
}, 500);




const times = 
    [
        {time:'9:00 a.m.', key: '9'},
        {time:'10:00 a.m.', key: '10'},
        {time:'11:00 a.m.', key: '11'},
        {time:'12:00 p.m.', key: '12'},
        {time:'1:00 p.m.', key: '13'},
        {time:'2:00 p.m.', key: '14'},
        {time:'3:00 p.m.', key: '15'},
        {time:'4:00 p.m.', key: '16'},
        {time:'5:00 p.m.', key: '17'},
        
    ]
    

function genList() 
{
    for(let i = 0; i < times.length; i++)
    {
        const newTimeBlock = document.createElement('div')
        newTimeBlock.classList.add('row', 'hour');
        newTimeBlock.id = times[i].key;
        document.querySelector('.dailyList').appendChild(newTimeBlock);
        
        //add the individual col per row
        //time Column
        const timeText = document.createElement('p');
        timeText.classList.add('col-2', 'time')
        timeText.textContent = times[i].time;
        newTimeBlock.appendChild(timeText);

        //input column
        const inputText = document.createElement('input');
        inputText.classList.add('col-9', 'inputs')
        inputText.style.width = '100%';
        inputText.id = times[i].key;
        //pulls the localStorage values on page load
        inputText.value = localStorage.getItem(times[i].key);
        newTimeBlock.appendChild(inputText);

        //save button column
        const saveBttn = document.createElement('button')
        saveBttn.classList.add('col-1', 'save');
        saveBttn.textContent = 'Save';
        saveBttn.id = times[i].key;
        newTimeBlock.appendChild(saveBttn);
    }

    
};

genList();

function colorChange()
{
    let todayDate = new Date();
    let hour = todayDate.getHours(); //24 format
    
    for(let i = 0; i < 9; i++)
    {
        let x = document.querySelectorAll('.hour')[i].id;
        
        if(parseInt(x) === hour)
        {
             document.querySelectorAll('.hour')[i].className= 'row hour focusInput';
        }
        else if(parseInt(x) < hour)
        {
            document.querySelectorAll('.hour')[i].className = 'row hour past';
        }
        else
        {
            document.querySelectorAll('.hour')[i].className = 'row hour future';
        }
        
    }
    
}



//add a listener to see if a button is clicked with the class of .save
document.addEventListener('click', function(evt) 
        {
            if(evt.target.matches('.save')){
                //stores the target that was clicked
                const btnClicked = evt.target;
                //stores the input in the same divs id
                const inptSel = btnClicked.previousElementSibling.id;
                //stores the inputs text value
                const inptVal = btnClicked.previousElementSibling.value;
                //stores the id/value in the Local Storage
                localStorage.setItem(inptSel, inptVal);
            }
        });

document.addEventListener('click', function(evt)
{
    if(evt.target.matches('.clear'))
    {
        for(let i = 0; i < 9; i++)
        {
            let el = document.querySelectorAll('input');
            if (el[i].type == 'text')
            {
                el[i].value = '';
            }
        }
        
        localStorage.clear();
    }
})



};
