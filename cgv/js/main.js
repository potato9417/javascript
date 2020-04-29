const seats = document.querySelectorAll("#seat .lines ul li");

let price = 0,
    clickNum = 0;


for(let i=0;i<seats.length;i++){
    // console.log(seats[i]);
    seats[i].addEventListener("click",function(){
        seats[i].classList.toggle("click");
        if(seats[i].classList.contains("click")){
            clickNum++;
        }
        else {
            clickNum--;
        }
        price=clickNum*10000;
        console.log(price);
    })
}