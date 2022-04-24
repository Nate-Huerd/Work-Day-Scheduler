$(document).ready(function () { 
    // add click listener
    $('.saveBtn').on('click', function() {
        var time = $(this)
            .parent()
            .attr('id');
        var value = $(this)
            .siblings('description')
            .val();

        // save time and value into localStorage for retrieval later
        localStorage.setItem(time, value);
    });

    // Add hours function
    function hourUpdater() {
        var currentHour = moment().hours();

        // this loops us through the time blocks
        $('.time-block').each(function() {
            var blockHour = parseInt(
                $(this)
                    .attr('id')
                    .split('-')[1]
            );
        
            // here we will cycle through Past, Present, and Future
            if (blockHour < currentHour) {
                $(this).addClass('past');
            } else if (blockHour === currentHour) {
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        });
    }

    // call hourUpdater
    hourUpdater();

    // check to see if we need to update the current time
    var interval = setInterval(hourUpdater, 15000);
  
    // call any of the saved data from localStorage
    $('#hour-8 .description').val(localStorage.getItem('hour-8'));
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  
    // display current day on page
    $('#currentDay').text(moment().format('dddd, MMMM Do'));
  });







/*
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
*/
