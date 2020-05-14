const  categoryAll = document.getElementById("all"),
    categoryCake = document.getElementById("cakes"),
    categoryCupcakes = document.getElementById("cupcakes"),
    categorySweets = document.getElementById("sweets"),
    categoryDoughnuts = document.getElementById("doughnuts"),
    showItemName = document.querySelectorAll("#list li .textBox .name"),
    showItemprice = document.querySelectorAll("#list li .textBox .price"),
    itemList = document.querySelectorAll("#list ul li"),
    inputItem = document.getElementById("inputItem"),
    categoryName = document.querySelectorAll("#category ul li");

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
function searchItemEvent(event){
    // console.log(inputItem.value);
<<<<<<< HEAD
    console.log(window);
    
=======
    console.log("콘솔찍는다",event.keyCode);

>>>>>>> 25fd875f9baf31498439ec2b35f91bbaabdef6da
    itemList.forEach(function(e){
        // console.log(e.outerText);
        // console.log(e);
        e.classList.add("hidden");
        let itemName = e.getElementsByClassName("name");
        // console.log(itemName[0].innerHTML.toUpperCase().split(""));
        let splitArr = itemName[0].innerHTML.toUpperCase().split("");
        let splitInputArr = inputItem.value.toUpperCase().split("");

        // 배열을 문자로 바꿔둠
        let splitStringArr = splitArr.toString();
        let splitStringInputArr = splitInputArr.toString();

        // 지금 입력한 단어
        let itemLetter = splitArr[num];
        let inputLetter = splitInputArr[num];

        // console.log(categoryName)
        console.log(splitStringInputArr,"==",splitStringArr)

        // if()


        // // 정규식.. 웨않뒈?
        // const regex = /[^\w\s]/g;
        // console.log(regex)
        // console.log(itemLetter.search(regex),inputLetter);


        // // 정규식 이용해서..
        // if(regex===inputLetter) {
        //     e.classList.add("hidden");
        // }
        
        
<<<<<<< HEAD
        
=======
        console.log(splitInputArr);
        console.log(itemLetter,"==",inputLetter)
>>>>>>> 25fd875f9baf31498439ec2b35f91bbaabdef6da
        // console.log(window)

        // // 입력한 글자의 위치의 글자와 입력한 글자가 같을떄.. cake을 입력할떄 e를 입력할떄  sweet의 e가 인식되벌임.. 싯...ㅍ..ㅏ..
        // if(itemLetter==inputLetter){
        //     e.classList.remove("hidden");
        // }
        
        

        // // 입력한 글자와 이름 앞글자가 같을 경우 두번쨰글자부터 인식못함..
        // if(splitArr.lastIndexOf(splitStringInputArr)){
        //     console.log("입력인식")
        //     e.classList.add("hidden")
        // };

        
        // // 입력한 글자와 이름이 모두 같을 경우
        // if(itemName[0].innerHTML.toUpperCase()===inputItem.value.toUpperCase()){
        //     console.log("hi")
        //     e.classList.remove("hidden")
        // };
        
    })
    // if(inputItem.value===
    if(event.keyCode===8){
        num--
    }
    else{
        num++
    }
    
    console.log(num)
}

<<<<<<< HEAD

=======
>>>>>>> 25fd875f9baf31498439ec2b35f91bbaabdef6da


clickCategoryEvent()
