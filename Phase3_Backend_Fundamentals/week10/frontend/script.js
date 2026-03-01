//state
let tasks = loadTasks();
let filter = "all";

//load DOM elements
const form = document.querySelector("#task-form")
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

// Data Functions
function loadTasks(){
    return  JSON.parse(localStorage.getItem("tasks")) || [];
}

function saveTasks(){
        localStorage.setItem("tasks",JSON.stringify(tasks));
}

function addTask(text){
        const task = {
                id:Date.now(),
                text,
                Completed:false
        };
        tasks.push(task);
        saveTasks();
}

function deleteTask(id){
        tasks = tasks.filter(task => task.id != id)
        saveTasks();
}

function toggleTask(id){
        tasks = tasks.map(task =>
                        task.id === id ? {...task, Completed: !task.Completed} : tasks
                )
        saveTasks();
}

// UI functions

function getFilteredTasks(){
                if(filter === "active"){
                    return tasks.filter(task => !task.completed);
                }

                if(filter === "completed"){
                     return tasks.filter(task => task.completed);
                }      
        return tasks;
}

function renderTasks(tasks){
        taskList.innerText = "";

        let filteredTask = getFilteredTasks();

        if(filteredTask.length === 0){
                taskList.innerHTML = "<p>No tasks found </p>";
                return ;
        }

        filteredTask.forEach(task => {
                const li = document.createElement("li");
                li.textContent = task.text;

                if(task.completed){
                        li.classList.add = "completed";
                }
                li.addEventListener("click",()=>{
                        toggleTask(task.id);
                        renderTasks();
                });
                const deleteBtn = document.createElement("button");
                deleteBtn.textContent = "X";

                deleteBtn.addEventListener("click",(e)=>{
                        e.stopPropagation();
                        deleteTask(task.id);
                        saveTasks();
                        renderTasks();
                })

                li.appendChild(deleteBtn);
                taskList.appendChild(li);
        });
}

// EVENT Handlers
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  addTask(text);
  input.value = "";
  renderTasks();
});

function setFilter(type) {
  filter = type;
  renderTasks();
}

// Initial Render
renderTasks();