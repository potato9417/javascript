const clockContainer = document.querySelector(".js-clock"),
    clockTitle = document.querySelector(".js-title");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}`: seconds}`;
}


// hours < 10 ? `0${hours}` : hours
// if(hours<10){`0${hours}`} else{hours} 와 같은 것이다.


function init(){
    getTime();
    setInterval(getTime,1000);
    // setInterval(함수,몇ms마다 함수실행할지)
}
init();