const xAxis = 16,
    yAxis = 13,
    seat = document.getElementById("lines"),
    selectSeat = document.getElementById("selectSeat"),
    selectPrice = document.getElementById("selectPrice"),
    selectNum = document.getElementById("selectNum"),
    btn = document.querySelector("#check .btns button");
    
let seatArr = [],
    price = 0,
    clickNum = 0,
    selectSeats=[],
    seatsArr=[],
    seats=[];




function seatSetting(){
    for(let y = 0; y < yAxis; y++) {
        for (let x = 0; x < xAxis; x ++) {
            let seatLine = ["A","B","C","D","E","F","G","H","I","J","K","L","M"];
            seatArr.push({xSeat:x,ySeat:seatLine[Math.floor(y%13)]});
            // console.log(seatArr);
            // 배열반복을 끝냈을 때 실행하도록 만든 if문
            if(seatArr.length===xAxis*yAxis){
                // 금액,좌석표시
                for(let i in seatArr){
                    // p태그를 append하는 방법(https://stackoverflow.com/questions/44288505/passing-in-array-data-into-div-elements)
                    const p = document.createElement("p");
                    const span = document.createElement("span");
                    // 모든좌석표시
                    p.append(`${seatArr[i].ySeat}${seatArr[i].xSeat+1}`);
                    seat.append(p);
                    // 선택한 좌석표시
                    span.append(`${seatArr[i].ySeat}${seatArr[i].xSeat+1}`);
                    selectSeat.append(span);
                        // append 문자열추가(원래있던것에 추가)
                        // innerHtml 문자열추가(원래있던것을 지우고)
                        // appendChild tag생성("p")
                    const seats = document.querySelectorAll("#lines p"),
                        showSeats = document.querySelectorAll("#selectSeat span");
                    if(seats.length===seatArr.length){
                        // console.log(seats);
                        for(let i=0;i<seats.length;i++){
                            // console.log(seats[i]);
                            seats[i].addEventListener("click",function(){
                                seats[i].classList.toggle("click");
                                if(seats[i].classList.contains("click")){
                                    clickNum++;
                                    seats[i].index=i;
                                    showSeats[i].classList.add("show");
                                }
                                else {
                                    clickNum--;
                                    showSeats[i].classList.remove("show");
                                }
                                // console.log(price);
                                // console.log(selectPrice);
                                price = 10000*clickNum;
                                console.log(selectNum);
                                selectNum.innerHTML=clickNum;
                                selectPrice.innerHTML=price;
                            })
                        }
                    }
                }
            }
        }
    }
    btn.addEventListener("click",function(){
        alert(`예매인원 총 ${clickNum}, 결제금액 총 ${price}원`);
    })
}



function reservation(){
    seatSetting();
}
reservation();

