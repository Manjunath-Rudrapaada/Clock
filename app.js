setInterval(displayTime, 1000);

function displayTime() {

    let time = new Date()
    let date = time.getDate()
    let month = time.getMonth()
    let day = time.getDay()
    let year = time.getFullYear()
    let hour = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()
    let merid = 'AM'


    switch (month) {
        case 0: month = 'January';
            break;
        case 1: month = 'February';
            break;
        case 2: month = 'March';
            break;
        case 3: month = 'April';
            break;
        case 4: month = 'May';
            break;
        case 5: month = 'June';
            break;
        case 6: month = 'July';
            break;
        case 7: month = 'August';
            break;
        case 8: month = 'September';
            break;
        case 9: month = 'October';
            break;
        case 10: month = 'November';
            break;
        default: month = 'December';
    }

    switch (day) {
        case 0: day = 'Sunday';
            break;
        case 1: day = 'Monday';
            break;
        case 2: day = 'Tuesday';
            break;
        case 3: day = 'Wednesday';
            break;
        case 4: day = 'Thursday';
            break;
        case 5: day = 'Friday';
            break;
        default: day = 'Saturday';
    }

    if (hour > 12) {
        hour = hour - 12;
        merid = 'PM';
    }
    if (hour == 0) {
        hour = 12;
        merid = 'AM';
    }

    if (hour < 10) {
        hour = '0' + hour;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec
    }

    let currentTime = hour + ' : ' + min + ' : ' + sec

    document.getElementById('date').innerHTML = month + ' ' + '0' + date + ' ' + year;
    document.getElementById('time').innerHTML = currentTime + ' ' + merid;
    document.getElementById('day').innerHTML = day

}
displayTime();