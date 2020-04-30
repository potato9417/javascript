
const xAxis = 16;
const yAxis = 13;

for(let y = 0; y < yAxis; y++) {
    for (let x = 0; x < xAxis; x ++) {
        console.log(`좌표>>>${x},${y}`);
    }
}



// const seats = document.querySelectorAll("#seat .lines ul li"),
//     selectSeat = document.getElementById("selectSeat"),
//     // selectSeat = document.querySelector("#selectSeat"),
//     selectPrice = document.getElementById("selectPrice"),
//     seatArr = [
//         {
//             seat:["A","B","C","D","E","F","G","H","I","J","K","L","M"], 
//             num:[
//                 1,2,3,4,5,6,7,8,9,10,13,14,
//                 1,2,3,4,5,6,7,8,9,10,11,12,13,14,
//                 1,2,3,4,5,6,7,8,9,10,11,12,13,14,
//                 1,2,3,4,5,6,7,8,9,10,11,12,13,14,
//                 1,2,3,4,5,6,7,8,9,10,11,12,13,14,
//                 1,2,3,4,5,6,7,8,9,10,11,12,13,14,
//                 3,4,5,6,7,8,9,10,11,12,13,14,
//                 3,4,5,6,7,8,9,10,11,12,13,14,
//                 3,4,5,6,7,8,9,10,11,12,13,14,
//                 3,4,5,6,7,8,9,10,11,12,13,14,
//                 3,4,5,6,7,8,9,10,11,12,13,14,15,16,
//                 3,4,5,6,7,8,9,10,11,12,13,14,15,16,
//                 3,4,5,6,7,8,9,10,11,12,13,14,15,16,
//             ]
//         },
//     ]
    
    

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