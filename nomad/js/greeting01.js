const form = document.querySelector(".form");
const input = document.querySelector(".input");
const greeting = document.querySelector(".greeting");

const localUser = "currentUser"

// localStorage에 저장하는 함수
function saveName(text){
    localStorage.setItem(localUser,text)
}

function defaultSubmit(event){
    event.preventDefault(); // form은 엔터를 누르면 자동으로 이벤트실행(어디론가 데이터를 보내서 자동으로 새로고침이됨)하는데 그것을 방지

    const currentValue = input.value; // input값
    showGreeting(currentValue); // greeting에 input에 입력된 값을 보여지게함
    saveName(currentValue); // input값을 localStorage로 저장하게함
}

// 이름이 입력이되지않은경우
function askName(){
    form.classList.add("showing");
    form.addEventListener("submit",defaultSubmit)
}

// 이름이 입력이 되어있을 경우 greeting에 보여질 메세지
function showGreeting(text){
    greeting.classList.add("showing");
    form.classList.remove("showing");
    greeting.innerText = `Welcome ${text}`;
}

// localStorage에 이름date가 들어있는지 여부 확인
function inputName(){
    const currentUser = localStorage.getItem(localUser);
    if(currentUser === null){
        askName();
    }
    else{
        showGreeting(currentUser);
    }
}

function init(){
    inputName()
}

init();
