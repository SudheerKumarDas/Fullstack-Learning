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
                li.dataset.id = task.id;

                if(task.completed){
                        li.classList.add = "completed";
                }
                li.innerHTML = `
                        <span>${task.text}</span>
                        <button class="delete-btn">X</button>
                        `;
                taskList.appendChild(li);
        });
}


// EVENT Handlers

taskList.addEventListener("click", (e)=>{
        const li = e.target.closest("li");
        if(!li) return;

        const id = Number(li.dataset.id)

        if(e.target.classList.contains("delete-btn")){
                deleteTask(id);
        }else{
                toggleTask(id);
        }
        renderTasks();
})


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