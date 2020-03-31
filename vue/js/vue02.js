


let app = new Vue({
    el:"#app",
    data:{
        first:Math.ceil(Math.random()*9),
        second:Math.ceil(Math.random()*9),
        result:"",
        value:""
    },
    methods:{
        checkResult(){
            // console.log(txtResult.value);
            // let txtResult = document.querySelector("#txtResult");
            if(this.first*this.second === Number(this.value)){
                this.result="딩동댕";
                this.first=Math.ceil(Math.random()*9);
                this.second=Math.ceil(Math.random()*9);
                this.result="";
            }
            else{
                this.result="땡"
            }
            this.value="";
            this.$refs.answer.focus();
        }
    }
});