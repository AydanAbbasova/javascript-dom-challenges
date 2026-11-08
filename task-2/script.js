const message = document.querySelector("#message");
const counter = document.querySelector("#counter");
const remaining = document.querySelector("#remaining");
const progress = document.querySelector("#progress");

message.addEventListener("input", function () {
    const length = message.value.length;

    counter.textContent = length + " / 100";
    remaining.textContent = "Remaining: " + (100 - length);
    progress.value = length;

    counter.classList.remove("warning");
    counter.classList.remove("limit");
    remaining.classList.remove("warning");
    remaining.classList.remove("limit");

    if (length >= 100) {
        counter.classList.add("limit");
        remaining.classList.add("limit");
    } else if (length > 80) {
        counter.classList.add("warning");
        remaining.classList.add("warning");
    }
});