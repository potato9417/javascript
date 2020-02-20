// new Swiper("#mainVisual .swiper-wrapper", {
//     speed: 1000,
//     effect: "fade",
//     loop: true,
//     autoPlay: {
//         delay: 3000,
//     }
// });

new Swiper("#mainVisual .mask",{
    speed: 1000,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: "#mainVisual .mask .btns .next",
        prevEl: "#mainVisual .mask .btns .pre",
      },
});

$("#lang a").on("click",function(){
    $(this).addClass("on");
    $(this).siblings().removeClass("on");
    return false;
})

new fullpage("#main", {
    scrollOverflow: true,
    onLeave: function(orgin,destination){
        let idx = destination.index;
        if(idx===0){
            $("#header").removeClass("tl");
        }
        else {
            $("#header").addClass("tl");
        }
    }
});


// fullpage에서 원하는 페이지를 찾을때 onLeave: function(orgin,destination){}
// orgin,destination은 변수이고 destination이 섹션의 위치를 알수있게 해줌
// console.log(destination); 중에 index가 위치
// let idx = destination.index; 를 변수로 새로 잡아서 함


