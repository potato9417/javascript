$("#gnb .depth01").on("mouseenter",function(){
    $("#header").addClass("on");
})
$("#gnb .depth01").on("mouseleave",function(){
    $("#header").removeClass("on");
})
$("#gnb .depth02").on("mouseenter",function(){
    $("#header").addClass("on");
})
$("#gnb .depth02").on("mouseleave",function(){
    $("#header").removeClass("on");
})

// $("#header .utilMenu .depth01 a").on("mouseenter",function(){
//     $("#header .utilMenu").addClass("on");
// })
// $("#header .utilMenu .depth01 a").on("mouseleave",function(){
//     $("#header .utilMenu").removeClass("on");
// })


// header의 language 메뉴
$("#header .utilMenu .language button").on("click",function(){
    $(this).removeClass("on");
    $(this).siblings().addClass("on");
})



// 스크롤에 따른 애니메이션효과
let time = gsap.timeline({paused:true});
time.from("#mainVisual ul li",{
    opacity:0,
    y:"100%",
    duration:1,
    ease:"power4.out",
    stagger: {
        each: 0.2
    }
})
.from("#mainVisual .news",{
    opacity:0,
    y:"100%",
    duration:1,
    ease:"power4.out",
},"-=1.7")
.from("#mainVisual .util",{
    opacity:0,
    y:"100%",
    duration:1,
    ease:"power4.out",
},"-=1.2");
$(window).on("scroll",function(){
    let st = $(window).scrollTop();
    console.log(st);
    if(st>630-200){
        if(!$("#mainVisual").hasClass("slide")){
            time.restart();
            $("#mainVisual").addClass("slide");
        }        
    }
    if(!$("#header").hasClass("slide")){
        $("#header").addClass("slide");
    }
    else {
        $("#header").removeClass("slide");
    }
})