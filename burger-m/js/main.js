let mainVisual = new Swiper("#mainVisual .mask",{
    effect:"fade",
    speed:1000,
    loop:true,
    autoplay: {
        delay:3000
    },
    pagination: {
        el: '.pagination',
        type: 'bullets',
      },
})