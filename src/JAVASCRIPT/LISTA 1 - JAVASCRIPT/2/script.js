let body = document.querySelector("body")
let btRed = document.getElementById("red")
let btGreen = document.getElementById("green")
let btBlue = document.getElementById("blue")

btRed.addEventListener('click', () => {
    body.style.backgroundColor = "red"
})
btGreen.addEventListener('click', () => {
    body.style.backgroundColor = "green"
})

btBlue.addEventListener('click', () => {
    body.style.backgroundColor = "blue"
})
