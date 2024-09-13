var countDownDate = new Date("Jan 01 2025, 00:00:00").getTime();
var x = setInterval(() => {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementsByClassName("days")[0].innerHTML = days;
    document.getElementsByClassName("hours")[0].innerHTML = hours;
    document.getElementsByClassName("minutes")[0].innerHTML = minutes;
    document.getElementsByClassName("seconds")[0].innerHTML = seconds;

    if(distance < 0){
        clearInterval(x)
        document.getElementsByClassName("days")[0].innerHTML = "00";
        document.getElementsByClassName("hours")[0].innerHTML = "00";
        document.getElementsByClassName("minutes")[0].innerHTML = "00";
        document.getElementsByClassName("seconds")[0].innerHTML = "00";
    }


}, 1000);