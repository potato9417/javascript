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
});


