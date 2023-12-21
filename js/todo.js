const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
const todoList = document.getElementById('todoList');
const taskInput = document.getElementById('taskInput');

function initTodoList() {
    todoList.innerHTML = '';
    storedTasks.forEach(task => addTaskElement(task));
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));

        addTaskElement(taskText);
        taskInput.value = '';
    }
}

function addTaskElement(taskText) {
    const taskItem = document.createElement('li');
    taskItem.style.paddingTop = "1%"
    taskItem.style.display = "flex";
    taskItem.style.flexDirection = "row";
    taskItem.style.justifyContent ="space-between"
    taskItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.onclick = function() {
        deleteTask(taskText);
    };

    taskItem.appendChild(deleteButton);
    todoList.appendChild(taskItem);
}

function deleteTask(taskText) {
    const taskIndex = storedTasks.indexOf(taskText);
    if (taskIndex !== -1) {
        storedTasks.splice(taskIndex, 1);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
        initTodoList(); // Update the list after deletion
    }
}

function clearTasks() {
    localStorage.removeItem('tasks');
    todoList.innerHTML = '';
    storedTasks.length = 0;
}


taskInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

window.onload = initTodoList;