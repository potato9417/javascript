const now = document.querySelector(".time");

function today(){
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if(hours<10){
        hours = "0"+hours
    }
    else if(minutes<10){
        minutes = "0"+minutes
    }
    else if(seconds<10){
        seconds = "0"+seconds
    }
    

    now.innerHTML = `${hours}:${minutes}:${seconds}`;
    // console.log(now);
}

function init(){
    today();
    setInterval(today,1000);
}

init()

