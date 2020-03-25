new fullpage("#fullpage", {
});

$("#gnb .gnbList > li").on("mouseenter",function(){
    let index = $(this).index();
    console.log(index);
    $("#header").addClass("on");
    if(index===1){
        
    }
})

$(".util .btns").on("click",function(){
    $("#header").toggleClass("click");
})