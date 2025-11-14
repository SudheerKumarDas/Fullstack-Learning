let todos = [];

function addTask(){
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if(taskText === ""){
        alert("Task cannot be empty");
    }

    todos.push({task: taskText, completed : false});
    input.value = "";

    renderTasks();
}

function deleteTask(index){
    todos.splice(index,1);
    renderTasks();
}

function completeTask(index){
    todos[index].completed = !todos[index].completed;
    renderTasks();
}

function renderTasks(){
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    todos.forEach((todo,index)=>{
        taskList.innerHTML += `
        <div class="task">
            <span class="${todo.completed ? 'Completed' : ''}">
            ${todo.task}
            </span>

             <div class="actions">
              <button onclick="completeTask(${index})">
                ${todo.completed ? "Undo" : "Complete"}
              </button>
              <button class="delete" onclick="deleteTask(${index})">
                Delete
              </button>
            </div>
          </div>

        </div>`;
    });
}