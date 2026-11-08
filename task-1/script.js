const colorBox = document.querySelector("#colorBox");

const redBtn = document.querySelector("#redBtn");
const greenBtn = document.querySelector("#greenBtn");
const blueBtn = document.querySelector("#blueBtn");

redBtn.addEventListener("click", function () {
    colorBox.style.backgroundColor = "red";
    colorBox.textContent = "Red";
});

greenBtn.addEventListener("click", function () {
    colorBox.style.backgroundColor = "green";
    colorBox.textContent = "Green";
});

blueBtn.addEventListener("click", function () {
    colorBox.style.backgroundColor = "blue";
    colorBox.textContent = "Blue";
});
