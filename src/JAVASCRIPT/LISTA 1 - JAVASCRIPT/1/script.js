let button = document.getElementById("button");
let paragraph = document.querySelector(".secret-text");

button.addEventListener('click', () => {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
})