const colors = ["Red","Green","Blue","Yellow", "Gray", "Orange"];
const btn = document.getElementById("changeColor");
const text = document.querySelector("#Color")

console.log(btn)

btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    text.textContent = "Background Color: " + colors[randomNumber]

});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

