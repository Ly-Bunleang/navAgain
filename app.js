const getBar = document.querySelector("span");
const getList = document.querySelector(".all_list");

getBar.addEventListener("click", function(){

    if(getList.classList.contains("active")){
        getList.classList.remove("active");
    }else{
        getList.classList.add("active");
    }

});