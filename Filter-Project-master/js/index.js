const  categoryAll = document.getElementById("all"),
    categoryCake = document.getElementById("cakes"),
    categoryCupcakes = document.getElementById("cupcakes"),
    categorySweets = document.getElementById("sweets"),
    categoryDoughnuts = document.getElementById("doughnuts"),
    showItemName = document.querySelectorAll("#list li .textBox .name"),
    showItemprice = document.querySelectorAll("#list li .textBox .price"),
    itemList = document.querySelectorAll("#list ul li"),
    inputItem = document.getElementById("inputItem");

let num = 0,
    itemLetterArr=[],
    inputLetterArr=[];



// 카테고리 클릭했을떄 관련 상품만 표시되게
function clickCategoryEvent(){
    categoryAll.addEventListener("click",function(){
        itemList.forEach(function(e){
            // console.log(e);
            e.classList.remove("hidden");
        })
    })
    categoryCake.addEventListener("click",function(){
        itemList.forEach(function(e){
            // console.log(e);
            e.classList.remove("hidden")
            if(!e.classList.contains("cakes")){
                e.classList.add("hidden");
            }
        })
    })
    categoryCupcakes.addEventListener("click",function(){
        itemList.forEach(function(e){
            // console.log(e);
            e.classList.remove("hidden")
            if(!e.classList.contains("cupcakes")){
                e.classList.add("hidden");
            }
        })
    })
    categorySweets.addEventListener("click",function(){
        itemList.forEach(function(e){
            // console.log(e);
            e.classList.remove("hidden")
            if(!e.classList.contains("sweets")){
                e.classList.add("hidden");
            }
        })
    })
    categoryDoughnuts.addEventListener("click",function(){
        itemList.forEach(function(e){
            // console.log(e);
            e.classList.remove("hidden")
            if(!e.classList.contains("doughnuts")){
                e.classList.add("hidden");
            }
        })
    })
}

// input에 글자가 입력될때마다 함수 실행하도록
function searchItemEvent(window){
    // console.log(inputItem.value);
    // console.log(window);
    let inputItemArr=[];
    inputItemArr.push(inputItem.value.split(""));
    console.log(inputItemArr[0],"입력한 글자");
    itemList.forEach(function(e){
        // console.log(e);
        let nameList = e.getElementsByClassName("name");
        let name = nameList[0].innerText.split("");
        console.log(name,"이름");
        // let nameArr = [];
        // nameArr.push(name);
        // console.log( nameArr)

        if(inputItemArr==name){
            console.log()
        }
    })

}




clickCategoryEvent()
