const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("changeColor");
const text = document.querySelector("#Color")


btn.addEventListener("click", function(){
    let color = "#"
    for(let i = 1;i<7;i++){
        color += hex[getRandomNumber()]
    }

    document.body.style.backgroundColor = color
    text.innerHTML = "Background Color: " + color
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}