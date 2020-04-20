const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting")

const USER_LS = "currentUser", 
    SHOWING_CN = "showing"

function paintGreeting(text){
    form.classList.remove(SHOWING_CN)
    greeting.classList.add(SHOWING_CN);
    greeting.innerText=`Hello ${text}`
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        // 유저네임없는경우
        console.log("이름없어")
    }
    else{
        // 유저네임 있는 경우
        paintGreeting(currentUser);
        console.log("이름있어")
    }
}

function init(){
    loadName()
}

init();