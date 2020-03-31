Vue.config.devtools=true;

let app = new Vue({
    el:"#app",
    data:{
        no:0,
        doThis:"",
        doLists:[],
    },
    methods:{
        doSave(){
            let tempNo=++this.no;
            this.doLists.push({no:tempNo,work:this.doThis});
            this.doThis="";
            console.log(tempNo);
        },
        doRemove(remove){
           
        }
    }
    
})