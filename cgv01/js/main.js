
const xAxis = 16,
    yAxis = 13,
    seats = document.getElementById("lines"),
    seatLine = [];
    
    
    

let seatArr = [];

for(let y = 0; y < yAxis; y++) {
    for (let x = 0; x < xAxis; x ++) {
        let seatLine = ["A","B","C","D","E","F","G","H","I","J","K","L","M"];
        seatArr.push({xSeat:x,ySeat:seatLine[Math.floor(y%13)]});
        // console.log(seatArr);
        // 배열반복을 끝냈을 때 실행하도록 만든 if문
        if(seatArr.length===xAxis*yAxis){
            for(let i in seatArr){
                // p태그를 append하는 방법(https://stackoverflow.com/questions/44288505/passing-in-array-data-into-div-elements)
                const p = document.createElement("p");
                p.append(`${seatArr[i].ySeat}${seatArr[i].xSeat}`);
                console.log(seats);
                seats.append(p);
                // append 문자열추가(원래있던것에 추가)
                // innerHtml 문자열추가(원래있던것을 지우고)
                // appendChild tag생성("p")
            }
        }
        
    }
}




// const seats = document.querySelectorAll("#seat .lines ul li"),
//     selectSeat = document.getElementById("selectSeat"),
//     // selectSeat = document.querySelector("#selectSeat"),
//     selectPrice = document.getElementById("selectPrice"),

    

// let price = 0,
//     clickNum = 0,
//     seatLi,
//     seatUl;

//     console.log(selectPrice)

// for(let i=0;i<seats.length;i++){
//     // console.log(seats[i]);
//     seats[i].addEventListener("click",function(){
//         seats[i].classList.toggle("click");
//         if(seats[i].classList.contains("click")){
//             clickNum++;
//             // seats[i].index=i;
//             seats[i].index=i;
//             console.log(i,seats[i].parentNode);
            
            
//         }
//         else {
//             clickNum--;
//         }
//         price=clickNum*10000;
//         // console.log(price);
//         console.log(selectPrice);
//         // console.log(selectPrice);
//         selectPrice.innerHTML=price;
//         selectSeat.innerHTML=seatArr[0].num[i];
//     })
// }