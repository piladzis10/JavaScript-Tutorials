const nmbr = document.getElementById("value")
const btnDecrease = document.querySelector(".btn-decrease")
const btnReset = document.querySelector(".btn-reset")
const btnIncrease = document.querySelector(".btn-increase")

let counter = 0

function checkForColor(counter){
    if (counter == 0){
        nmbr.style.color = "black"
    }
    else if (counter < 0){
        nmbr.style.color = "red"
    }
    else {
        nmbr.style.color = "green"
    }
}


btnDecrease.addEventListener("click",function(){
    counter--
    nmbr.innerHTML = counter

    checkForColor(counter)
})

btnReset.addEventListener("click",function(){
    counter = 0
    nmbr.innerHTML = counter
    checkForColor(counter)
})

btnIncrease.addEventListener("click",function(){
    counter++
    nmbr.innerHTML = counter
    checkForColor(counter)
})

