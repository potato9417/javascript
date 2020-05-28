new Swiper("#mainVisual",{
    speed: 1000,
    effect: "fade",
    loop: true,
    navigation: {
        nextEl: "#mainVisual .btnNext",
        prevEl: "#mainVisual .btnPrev",
    },
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: "#mainVisual .pagination",
        type: "bullets",
        clickable: "true",
    },
});

$(".btnAll").on("click",function(){
    $("body").toggleClass("open");
    $("#gnb").stop().slideToggle();
    $("#gnb .depth02").stop().delay(500).slideUp();
    return false;
});

$("#gnb .list .depth01").on("click",function(){
    $(this).next(".depth02").stop().slideToggle();
    $(this).parent().siblings().find(".depth02").slideUp();
    return false;
});