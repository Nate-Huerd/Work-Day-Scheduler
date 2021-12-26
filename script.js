$(document).ready(function () { 

    var today = new Date();
    // Get today's date
    var day = today.getDate() + '-' + (today.getMonth() + 1) + '-' + (today.getFullYear());
    document.getElementById('currentDay').innerHTML = day;

    var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    var currentHour = moment().format("H");

    // Declare current moment
    var now = moment().format('LLLL');
    
    // Declare currentDate and currentHour (need this to determine if a task is past, present, or future)
    var currentDate = $('#currentDay');
    currentDate.text(now);
    var cal = new Date();
    var currentHour = cal.getHours();
    
    for (var i = 0; i < data.length; i++) {
        if (i < currentHour) {
            document.getElementByClass("row").style.color = "#d3d3d3";
        } else if (i === currentHour) {
            document.getElementByClass("row").style.color = "#ff6961";
        } else if (i > currentHour) {
            document.getElementByClass("row").style.color = "#77dd77";
        } else {
            document.getElementByClass("row").style.color = "#00000";
        }
    }

    function setColor(element, color) {
        element.style.backgroundColor = color
    }

    // saveBtn function - saves to local storage
    {
        $('.saveBtn').click(function() {
            // Figure out what var to use. hour# is not being called anywhere
            var hour8 = document.getElementById('8am').value;
            localStorage.setItem('text8am', hour8);

            var hour9 = document.getElementById('9am').value;
            localStorage.setItem('text9am', hour9);

            var hour10 = document.getElementById('10am').value;
            localStorage.setItem('text10am', hour10);

            var hour11 = document.getElementById('11am').value;
            localStorage.setItem('text11am', hour11);

            var hour12 = document.getElementById('12pm').value;
            localStorage.setItem('text12pm', hour12);

            var hour13 = document.getElementById('1pm').value;
            localStorage.setItem('text1pm', hour13);

            var hour14 = document.getElementById('2pm').value;
            localStorage.setItem('text2pm', hour14);

            var hour15 = document.getElementById('3pm').value;
            localStorage.setItem('text3pm', hour15);

            var hour16 = document.getElementById('4pm').value;
            localStorage.setItem('text4pm', hour16);

            var hour17 = document.getElementById('5pm').value;
            localStorage.setItem('text5pm', hour17);
        });
    }

    // Display saved tasks after refresh/load
    var saved8am = localStorage.getItem('text8am');
    document.getElementById('8am').value = saved8am;

    var saved9am = localStorage.getItem('text9am');
    document.getElementById('9am').value = saved9am;

    var saved10am = localStorage.getItem('text10am');
    document.getElementById('10am').value = saved10am;

    var saved11am = localStorage.getItem('text11am');
    document.getElementById('11am').value = saved11am;

    var saved12pm = localStorage.getItem('text12pm');
    document.getElementById('12pm').value = saved12pm;

    var saved1pm = localStorage.getItem('text1pm');
    document.getElementById('1pm').value = saved1pm;

    var saved2pm = localStorage.getItem('text2pm');
    document.getElementById('2pm').value = saved2pm;

    var saved3pm = localStorage.getItem('text3pm');
    document.getElementById('3pm').value = saved3pm;

    var saved4pm = localStorage.getItem('text4pm');
    document.getElementById('4pm').value = saved4pm;

    var saved5pm = localStorage.getItem('text5pm');
    document.getElementById('5pm').value = saved5pm;

});



/* creator notes below, ignore

newish date stuff
    // Declare today
    var today = new Date();

    // Declare current moment
    var now = moment().format('LLLL');

    // Declare currentDate and currentHour (need this to determine if a task is past, present, or future)
    var currentDate = $('#currentDay');
        currentDate.text(now);
    var cal = new Date();
    var currentHour = cal.getHours();


Get today's day of the week
    var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var d = new Date();
        let day = weekday[d.getDay()];
            document.getElementById('currentDay').innerHTML = day;
        let month = d.getMonth();
        let year = d.getFullYear();
        */