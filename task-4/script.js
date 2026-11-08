const questions = document.querySelectorAll(".faq-question");

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function (event) {
        const clicked = event.currentTarget;
        const wasOpen = clicked.classList.contains("active");

        // Əvvəlcə bütün suallar bağlanır
        for (let j = 0; j < questions.length; j++) {
            questions[j].classList.remove("active");
            questions[j].nextElementSibling.classList.remove("show");
            questions[j].querySelector("span").textContent = "+";
        }

        // Klik edilən sual əvvəl bağlı idisə, indi açılır
        if (wasOpen === false) {
            clicked.classList.add("active");
            clicked.nextElementSibling.classList.add("show");
            clicked.querySelector("span").textContent = "−";
        }
    });
}
