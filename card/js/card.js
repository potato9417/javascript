let resultArray = [];
let cardArray=[];
$(document).ready(function(){
    $("#card li").on("click",function(){
        resultArray.push($(this).data("click"));
        cardArray.push($(this));
        console.log(cardArray[0],"====",cardArray[1]);
        if(!$(this).hasClass("turn")) {
            gsap.to($(this),{
                duration: 1.2,
                rotationY: 180,
                perspective: 500,
                ease: "back.inOut",
            })
            $(this).addClass("turn");
        }
        if(resultArray.length===2) {
            if(resultArray[0]===resultArray[1]) {
                console.log(" y")
            }
            else {
                setTimeout(function (){
                    gsap.to(cardArray[0],{
                        rotationY:0,
                    });
                    gsap.to(cardArray[1],{
                        rotationY:0,
                    });
                    console.log(" gasp  dhfb")
                },200)
                
                console.log(" x")
            }
            resultArray=[];
            cardArray=[];
        }
        // else {
        //     gsap.to($(this),{
        //         duration: 1.2,
        //         rotationY: 0, 
        //         perspective: 500,
        //         ease: "back.inOut",
        //     })
        //     $(this).removeClass("turn");
        // }
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
        duration: 1,
        rotationY: 0,
        perspective: 500,
        ease: "back.inOut"
    })

})

