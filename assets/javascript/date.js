let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function renderMonths() {
    for(let i = 0; i < months.length; i++) {
        let rendMonth = document.createElement('div');
        rendMonth.textContent = months[i];
        rendMonth.classList.add('dropdown-item');

        rendMonth.addEventListener('click', function(){
            let myMonth = i;
            return function()
            {
            month = myMonth;
            document.querySelector('curMonth').textContent = months[month];
            renderDays();
            return month;
            }
        });
        document.querySelector('#months').appendChild(rendMonth);
    }
}