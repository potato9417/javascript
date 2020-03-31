let app = new Vue({
    el:"#app",
    data:{
        word: "고양이",
        value:"",
        result:"",
        words:[]
    },
    methods: {
        checkWord(){
            if(this.word.charAt(this.word.length-1)===this.value.charAt(0)){
                this.result="딩동댕";
                this.word=this.value;
                this.words.push({txt:this.value});
            }
            else{
                this.result="땡";
            }
            this.value="";
        }
    }
})