let app = new Vue({
    el:"#app",  //뷰가 제어할 엘리먼트를 지정해준다(html에서 나타나게할곳)
    data:{
        message:"hello Vue",
        seen:true,
        fruits:[
            {name:"banana",price:3000},
            {name:"watermelon",price:15000},
            {name:"strawberry",price:10000},
            {name:"apple",price:5000},
        ]
    }
    // data안의 message와같은 것들은 변수이며 바꿀수있다.
});    // 생성자 함수
// 프로그래밍에서 중요한 것 =  data 와 view(화면) 를 맞춰야한다.
// vue react가 잘하는 것 data를 화면에 잘 맞춰줌