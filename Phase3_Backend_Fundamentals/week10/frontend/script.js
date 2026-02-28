const form = document.querySelector("#task-form")
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let filter = "all";

form.addEventListener("submit", function(e){
        e.preventDefault();
        
        let taskText = taskInput.value.trim();

        if(taskText==="") return

        const task = {
                id:Date.now(),
                text:taskText,
                completed:false
        }
        tasks.push(task);
        saveTask();
        taskInput.value = "";
        renderTasks(tasks);
})

function saveTask(){
        localStorage.setItem("tasks",JSON.stringify(tasks));
}

function setFilter(type){
        filter = type;
        renderTasks();
}

function renderTasks(tasks){
        taskList.innerText = "";

        let filteredTask = tasks;

        if(filter === "active"){
                filteredTask = tasks.filter(task => !task.completed);
        }

        if(filter === "completed"){
                filteredTask = tasks.filter(task => task.completed);
        }

        if(filteredTask.length === 0){
                taskList.innerHTML = "<p>No tasks found </p>";
        }

        filteredTask.forEach(task => {
                const li = document.createElement("li");
                li.textContent = task.text;

                if(task.completed){
                        li.classList.add = "completed";
                }
                li.addEventListener("click",()=>{
                        task.completed = !task.completed;
                        renderTasks();
                });
                const deleteBtn = document.createElement("button");
                deleteBtn.textContent = "X";

                deleteBtn.addEventListener("click",(e)=>{
                        e.stopPropagation();
                        tasks = tasks.filter(t => t.id !== task.id);
                        saveTask();
                        renderTasks();
                })

                li.appendChild(deleteBtn);
                taskList.appendChild(li);
        });
}

renderTasks();

