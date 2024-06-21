const dayTasksUl = document.getElementById("day-tasks");
const nightTasksUl = document.getElementById("night-tasks");
const dayTasksItems = document.getElementsByClassName("day");
const nightTasksItems = document.getElementsByClassName("night");

function addTask(){
    const userInput = document.getElementById("add-task").value;
    const selectOption = document.getElementById("choice").value;

    if(userInput.trim() === ""){
        alert("É necessário inserir uma tarefa");
        return;
    }
    const newTaskItem = document.createElement("li");
    newTaskItem.textContent = userInput;
    newTaskItem.classList.add("task-list");

    const removeButton = document.createElement("button");
    removeButton.textContent = "❌";
    removeButton.classList.add("remove-task");
    removeButton.addEventListener("click", function() {
        newTaskItem.remove();
    });

    newTaskItem.appendChild(removeButton);

    if(selectOption === "day"){
        dayTasksUl.appendChild(newTaskItem);
    } else {
        nightTasksUl.appendChild(newTaskItem);
    }

    document.getElementById("add-task").value = "";
}