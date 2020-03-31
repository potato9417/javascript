Vue.config.devtools=true;



let app = new Vue({
    el:"#app",
    data:{
        mode:"list",
        title:"",
        contents:"",
        idx:0,
        memos:[],
        selectedId:null,
    },
    created:function(){
        console.log("하위");
        let tempData = localStorage.getItem("memos");
        let tempIdx = localStorage.getItem("idx");
        if(tempData!==null){
            this.memos=JSON.parse(tempData);
        }
        if(tempIdx!==null){
            this.idx=tempIdx;
        }
    }, // 시작하자마자 일어나는 효과
    methods:{
        changeWrite(){
            this.title="";
            this.contents="";
            this.mode="write";
            this.$nextTick(function(){
                this.$refs.txt.focus();
            })
            // 화면전환이됬을때(기본화면이 아니라 없던것이 생겼을떄 적용해라)
        },
        changeList(){
            this.mode="list";
        },
        changeMode(mode){
            this.title="";
            this.contents="";
            this.mode=mode;
        },
        saveMemo(){
            let tempID=++this.idx;
            if(this.mode==="write"){
                this.memos.push({id:tempID,title:this.title,contents:this.contents});
                console.log(tempID);
            }
            else if(this.mode==="modify"){
                for(let i in this.memos){
                    if(this.memos[i].id === this.selectedId){
                        this.memos[i].title = this.title;
                        this.memos[i].contents = this.contents;
                        break;
                    }
                }
            }
            this.title="";
            this.contents="";
            this.mode="list";
            localStorage.setItem("memos",JSON.stringify(this.memos)); // 메모한것 저장
            localStorage.setItem("idx",tempID); // idx를 저장
            // localStorage.setItem("key","value");는 내피시에 저장장소(f12에서 application에위치)를 만들어주는것 value는 JSON.stringofy()를 사용하여 문자열로 변경(하지않으면 읽을수가 없음)
        },
        showMemo(showID){
            this.selectedId = showID;
            for(let i in this.memos){
                // console.log(i);
                if(this.memos[i].id === showID){
                    this.title = this.memos[i].title;
                    this.contents = this.memos[i].contents;
                    this.mode="write";
                    break;
                    // break는 조건을 만족했으면 for문반복을 끝내라 (<->continue는 반대 계쏙 반복문을 진행해라)
                }
            }
            this.mode="modify";
            this.$nextTick(function(){
                this.$refs.txt.focus();
            })
        },
        removeMemo(){
            console.log("내가 선택한id는?",this.selectedId);
            if(confirm("삭제하시겠습니까?")){
                for(let i in this.memos){
                    if(this.memos[i].id === this.selectedId){
                        this.memos.splice(i,1);
                        localStorage.setItem("memos",JSON.stringify(this.memos));
                        this.mode="list";
                        break;
                    }
                }
            }
        },
        deleteMemo(deleteID){
            console.log("내가 선택한id는?",deleteID);
            this.selectedId = deleteID;
            if(confirm("삭제하시겠습니까?")){
                for(let i in this.memos){
                    if(this.memos[i].id === deleteID){
                        this.memos.splice(i,1);
                        localStorage.setItem("memos",JSON.stringify(this.memos));
                        break;
                    }
                }
            }
            this.mode="list";
        }
    }
})

