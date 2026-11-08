const form = document.querySelector("#taskForm");
const input = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

const totalTasks = document.querySelector("#totalTasks");
const completedTasks = document.querySelector("#completedTasks");

const filterButtons = document.querySelectorAll("[data-filter]");

let tasks = [];
let nextId = 1;
let currentFilter = "all";

// Siyahını sıfırdan çəkir: filterə görə task-ları seçir və sayğacları yeniləyir
function render() {
    let visibleTasks = tasks;

    if (currentFilter === "active") {
        visibleTasks = tasks.filter(function (task) {
            return task.completed === false;
        });
    } else if (currentFilter === "completed") {
        visibleTasks = tasks.filter(function (task) {
            return task.completed === true;
        });
    }

    // Köhnə siyahını təmizləyirik
    taskList.textContent = "";

    for (let i = 0; i < visibleTasks.length; i++) {
        const task = visibleTasks[i];

        const item = document.createElement("li");
        item.dataset.id = task.id;

        if (task.completed === true) {
            item.classList.add("completed");
        }

        const text = document.createElement("span");
        text.textContent = task.text;

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Complete";
        completeBtn.classList.add("complete-btn");

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        item.append(text, completeBtn, deleteBtn);
        taskList.append(item);
    }

    const completedCount = tasks.filter(function (task) {
        return task.completed === true;
    }).length;

    totalTasks.textContent = "Total: " + tasks.length;
    completedTasks.textContent = "Completed: " + completedCount;
}

// Yeni task əlavə etmək
form.addEventListener("submit", function (event) {
    // Formun səhifəni yeniləməsinin qarşısını alır
    event.preventDefault();

    const text = input.value.trim();

    // Boş mətn olarsa, task yaradılmır
    if (text === "") {
        return;
    }

    tasks.push({
        id: nextId,
        text: text,
        completed: false
    });

    nextId = nextId + 1;
    input.value = "";
    render();
});

// Event Delegation: bütün Complete və Delete klikləri bir yerdən idarə olunur
taskList.addEventListener("click", function (event) {
    const clicked = event.target;
    const id = Number(clicked.parentElement.dataset.id);

    if (clicked.classList.contains("complete-btn")) {
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id === id) {
                tasks[i].completed = !tasks[i].completed;
            }
        }
        render();
    } else if (clicked.classList.contains("delete-btn")) {
        tasks = tasks.filter(function (task) {
            return task.id !== id;
        });
        render();
    }
});

// Filter düymələri
for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function () {
        currentFilter = filterButtons[i].dataset.filter;

        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active");
        }
        filterButtons[i].classList.add("active");

        render();
    });
}