document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addButton = document.getElementById("add");
    const taskList = document.getElementById("task-list");

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <span class="delete">Delete</span>
            `;

            li.querySelector(".delete").addEventListener("click", function () {
                li.remove();
            });

            taskList.appendChild(li);
            taskInput.value = "";
        }
    });

    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addButton.click();
        }
    });
});
