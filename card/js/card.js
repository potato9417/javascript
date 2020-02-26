let resultArray = [];
let cardArray=[];
let finishArray=[];
$(document).ready(function(){
    $("#card li").on("click",function(){
        if(!$(this).hasClass("turn")){
            resultArray.push($(this).data("click"));
            cardArray.push($(this));
            gsap.to($(this),{
                duration: 1.2,
                rotationY: 180,
                perspective: 500,
                ease: "back.inOut",
            });
            if(resultArray.length===2) {
                if(resultArray[0]===resultArray[1]) {
                    finishArray.push(resultArray[0]);
                    finishArray.push(resultArray[1]);
                    resultArray=[];
                    cardArray=[];
                    // console.log(finishArray);
                    // console.log(finishArray.length);
                    if(finishArray.length===16) {
                        
                        console.log("성공");
                    }
                } 
                else {
                    console.log("n");
                    // 클릭하자마자 바로 gsap이 진행되므로 setTimeout으로 시간차를 둬야함
                    setTimeout(function(){
                        gsap.to(cardArray[0],{
                            duration: 1.2,
                            rotationY: 0,
                            perspective: 500,
                            ease: "back.inOut",
                        });
                        gsap.to(cardArray[1],{
                            duration: 1.2,
                            rotationY: 0,
                            perspective: 500,
                            ease: "back.inOut",
                        });
                        cardArray[0].removeClass("turn");
                        cardArray[1].removeClass("turn");
                        resultArray=[];
                        cardArray=[];
                    },1000)
                }
            }
            $(this).addClass("turn");
        }
        // console.log(resultArray);
        // console.log(cardArray);
        /*
        $(this).addClass("turn");
        resultArray.push($(this).data("click"));
        cardArray.push($(this));
        console.log(resultArray[0],"====",resultArray[1]);
        console.log(cardArray[0],"====",cardArray[1]);
        if($(this).hasClass("turn")) {
            gsap.to($(this),{
                duration: 1.2,
                rotationY: 180,
                perspective: 500,
                ease: "back.inOut",
            })
            if(resultArray.length===2) {
                if(resultArray[0]===resultArray[1]) {
                    console.log("y");
                }
                else {
                    console.log("x");
                    if($(this).hasClass("turn")) {
                        gsap.fromTo($(this),{
                            duration: 3,
                            rotationY: 180,
                            perspective: 500,
                        },
                        {
                            duration: 3,
                            rotationY: 0,
                            perspective: 500,
                            ease: "back.inOut",
                        })
                    }
                    else if($(this).siblings().hasClass("turn")) {
                        gsap.to($(this).siblings(),{
                            duration: 3,
                            rotationY: 0,
                            perspective: 500,
                            ease: "back.inOut",
                        })
                    }
                    console.log($(cardArray[0]));
                }
                $(this).removeClass("turn");
                resultArray=[];
                cardArray=[];
            }
        }
        */
        // else {
        //     gsap.to($(this),{
        //         duration: 1.2,
        //         rotationY: 0, 
        //         perspective: 500,
        //         ease: "back.inOut",
        //     })
        //     $(this).removeClass("turn");
        // }
        //console.log(resultArray.length);
        
    })
})
let randomCard = function(){
    number = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
    selectNum = [];
    let random;
    let imgSrc;
    for(let i=0; i<16; i++) {
        random = Math.floor(Math.random()*number.length);
        selectNum.push(number[random]);
        number.splice(random,1);
        let selNum = selectNum[selectNum.length-1];
        // console.log("TLC:number","===",random);
        // console.log("TLC:number[random]","===",number[random]);
        // console.log("TLC:selecNum","===",selectNum);
        imgSrc = `images/0${selNum}.png`;
        //console.log(selNum);
        $("#card li").eq(i).find(".back img").attr({"src" : imgSrc});
        $("#card li").eq(i).data("click",selNum);
        // console.log(selNum);
    }
}
//randomCard();
$("#btn").on("click",function(){
    randomCard();
    gsap.fromTo($("#card li"),{
        rotationY: 180,
        perspective: 500,
    },
    {
        duration: 3,
        rotationY: 0,
        perspective: 500,
        ease: "back.inOut"
    })

})

