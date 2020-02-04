function showTime() {
    var date = new Date();

    var dateDay = {
        weekday: "long"
    };
    var dayNum = date.getDate();
    var dateMonth = {
        month: "long"
    };
    var dateHour = date.getHours();
    var dateMinute = date.getMinutes();
    var dateSeconds = date.getSeconds();

    dateMinute = checkTime(dateMinute);
    dateSeconds = checkTime(dateSeconds);




    var day = document.querySelector("#day");
    var date = document.querySelector("#date");
    var month = document.querySelector("#month");
    var clock = document.querySelector("#clock");

    day.innerHTML = new Intl.DateTimeFormat('en-US', dateDay).format();
    date.innerHTML = dayNum;
    month.innerHTML = new Intl.DateTimeFormat('en-US', dateMonth).format();
    clock.innerHTML = dateHour + ":" + dateMinute + ":" + dateSeconds;


    activeTime = setTimeout(showTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; 
    return i;
}

window.onload = showTime;