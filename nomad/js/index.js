// // console.log(document);
// // const title = document.getElementById("title");
// const title = document.querySelector("#title");

// // // console.error("fuck");
// // title.innerHTML="Hi From JS";
// // title.style.color="red";

// // console.log(title);
// // console.dir(document); // title에 대한 설명
// // document.title = "I own you now";

// // function handleResize(event){
// //     console.log(event);
// //     console.log("I have been resized");
// // }
// // window.addEventListener("resize",handleResize);
// // 내가 필요한 순간에 함수 실행
// // window.addEventListener("resize",handleResize());
// // 함수를 즉시 실행

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "rgb(122, 120, 152)"


// function handleClick(){
//     const currentColor = title.style.color;
//     // console.log(currentColor);
//     if(currentColor===BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     }
//     else{
//         title.style.color = BASE_COLOR;
//     }

// }

// function init(){
//     title.style.color =BASE_COLOR;
//     title.addEventListener("click",handleClick);
// }
// init();

// // https://developer.mozilla.org/ko/docs/Web/Events   // mozilla event reference





// // if(true){
// //     console.log("hi")
// // }
// // else{
// //     console.log("ho")
// // }

// // // const lalala="lalala";

// // const age = prompt("How old are you");
// // console.log(age);
// // if(age>18 && age<21){
// //     console.log("YOU CAN DRINK BUT YOU SHOULD NOT");
// // }
// // else if(age>21){
// //     console.log("GO AHEAD")
// // }
// // else{
// //     console.log("TOO YOUNG");
// // }


// function handleOffline(){
//     console.log("offline")
// }
// function handleOnline(){
//     console.log("online")
// }

// window.addEventListener("offline",handleOffline);
// window.addEventListener("online",handleOnline);

const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // console.log(hasClass);
    // if(hasClass){
    //     title.classList.remove(CLICKED_CLASS);
    //     // title.className=CLICKED_CLASS;
    //     // .className: 가지고있던 모든 class를 없애고 변경함
    // }
    // else {
    //     title.classList.add(CLICKED_CLASS);
    // }
}

function init(){
    title.addEventListener("click",handleClick);
}
init();