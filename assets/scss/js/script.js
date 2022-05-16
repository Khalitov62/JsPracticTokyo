let btn = document.querySelectorAll(".buttons")

let box1 = document.querySelector(".box1")
let box2 = document.querySelector(".box2")
let box3 = document.querySelector(".box3")

let btn1 = document.querySelector(".lon")
let btn2 = document.querySelector(".pa")
let btn3 = document.querySelector(".to")


btn1.addEventListener("click", function(){
   box1.classList.add("d-block")

})

btn2.addEventListener("click", function(){
    box2.classList.add("d-block")
    box1.classList.add("d-none")
    
})

btn3.addEventListener("click", function(){
    box2.classList.add("d-none")
    box1.classList.add("d-none")
    box3.classList.add("d-block")
})