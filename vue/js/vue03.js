let app = new Vue({
    el:"#app",
    data:{
        checked:true,
        // 체크박스 하나만 선택할떄 (동의/비동의)
        checkJobs:[],
        // 체크박스 여러개선택일경우 (다중선택)
        pick:"남자",
        // 라디오체크 둘중하나만 선택가능한것
        selected:"100",
        cities:[
            {name:"시/도",value:"100",disabled:true},
            {name:"서울",value:"01",disabled:false},
            {name:"경기도",value:"02",disabled:false},
            {name:"강원도",value:"03",disabled:false},
            {name:"충청도",value:"04",disabled:false},
            {name:"경상도",value:"05",disabled:false},
            {name:"전라도",value:"06",disabled:false},
            {name:"제주도",value:"07",disabled:false},
        ],
    }
});