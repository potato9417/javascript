new fullpage("#fullpage", {
	navigation: true,
	navigationPosition: "left",
	navigationTooltips: ["COMPANY", "BUSINESS", "PR CENTER", "RECRUIT"],
	showActiveTooltip: true,
});

$("#gnb .gnbList > li").on("mouseenter",function(){
    let index = $(this).index();
    console.log(index);
    $("#header").addClass("on");
    $(this).find("ul").addClass("on");
    $(this).siblings().find("ul").removeClass("on");
    if(!$(this).hasClass("on")){
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
    }
})
$("#gnb .gnbList > li").on("mouseleave",function(){
    $("#header").removeClass("on");
})

$(".util .btns").on("click",function(){
    $("#header").toggleClass("click");
})

$("#mainVisual .moreBox .btnsMore .moreOpen").on("click",function(){
    $("#mainVisual .moreBox").addClass("open");
    return false;
})
$("#mainVisual .moreBox .btnsMore .moreClose").on("click",function(){
    $("#mainVisual .moreBox").removeClass("open");
    return false;
})