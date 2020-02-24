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
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
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

let tapMenu = $("#util .depth02 .tapMenu li");
let tapList = $("#util .depth02 .tapList li");

tapMenu.on("click",function(){
    let index = $(this).index();
    // console.log(index);
    i=index;
    tap(i);
    return false;
})

let tap = function(i){
    tapMenu.eq(i).addClass("view");
    tapMenu.eq(i).siblings().removeClass("view");
    tapList.eq(i).addClass("view");
    tapList.eq(i).siblings().removeClass("view");
}


// eq값은 index로 찾고 index값은 eq로 찾는다