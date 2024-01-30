const inputVal = document.querySelector(".inputVal");
const btn = document.querySelector(".btn");
const todoLists = document.querySelector(".todoLists");
const clearTaskBtn = document.querySelector(".clearTask");

btn.addEventListener("click", addTask);

function addTask() {
    if (inputVal.value.trim() !== "") {
        const taskItem = document.createElement("div");
        taskItem.classList.add("taskItem");
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("taskCheckbox");
        
        const taskText = document.createElement("span");
        taskText.innerText = inputVal.value;
        
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);
        
        todoLists.appendChild(taskItem);
        
        inputVal.value = "";
    }
}

clearTaskBtn.addEventListener("click", clearTask);

function clearTask() {
    todoLists.innerHTML = "";
}

function addTask() {
    if (inputVal.value.trim() !== "") {
        const taskItem = document.createElement("div");
        taskItem.classList.add("taskItem");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("taskCheckbox");

        const taskText = document.createElement("span");
        taskText.innerText = inputVal.value;

        const removeBtn = document.createElement("button");
        removeBtn.innerText = "X";
        removeBtn.classList.add("removeBtn");
        removeBtn.addEventListener("click", () => removeTask(taskItem));

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);
        taskItem.appendChild(removeBtn);

        todoLists.appendChild(taskItem);

        inputVal.value = "";
    }
}

function removeTask(taskItem) {
    todoLists.removeChild(taskItem);
}