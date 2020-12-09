const clockContainter = document.querySelector(".js-clock"),
 clockTitle = clockContainter.querySelector("h1");

function getTime(){
    const date = new Date();
    const Year = date.getFullYear() 
    const Month = date.getMonth() + 1
    const Day = date.getDate()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    clockTitle.innerText = `${Year} ${Month}.${Day} ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}

function init(){
    getTime();
    setInterval(getTime, 1000); //1초마다 시간 증가 
}

init()