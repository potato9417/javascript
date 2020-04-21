const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting")

const USER_LS = "currentUser", 
    SHOWING_CN = "showing"

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault();
    // 이벤트효과를 없애게 해줌
    const currentValue=input.value;
    // console.log(currentValue);
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

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
        askForName()
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