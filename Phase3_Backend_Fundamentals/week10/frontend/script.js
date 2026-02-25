const form = document.querySelector("#task-form")
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

let tasks = [];

form.addEventListener("submit", function(e){
        e.preventDefault();
        
        let taskText = taskInput.value.trim();

        if(taskText==="") return

        const task = {
                id:Date.now(),
                task:taskText,
                completed:false
        }
        tasks.push(task);
        taskInput.value = "";
        renderTasks(tasks);
})











































// const form = document.getElementById("taskForm");
// const input = document.getElementById("taskInput");
// const taskList = document.getElementById("taskList");

// let tasks = [];

// form.addEventListener("submit", function(e) {
//   e.preventDefault();

//   const taskText = input.value.trim();

//   if (taskText === "") return;

//   const task = {
//     id: Date.now(),
//     text: taskText,
//     completed: false
//   };

//   tasks.push(task);
//   input.value = "";
//   renderTasks();
// });

// function renderTasks() {
//   taskList.innerHTML = "";

//   tasks.forEach(task => {
//     const li = document.createElement("li");

//     li.textContent = task.text;

//     if (task.completed) {
//       li.classList.add("completed");
//     }

//     li.addEventListener("click", () => {
//       task.completed = !task.completed;
//       renderTasks();
//     });

//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "X";

//     deleteBtn.addEventListener("click", (e) => {
//       e.stopPropagation();
//       tasks = tasks.filter(t => t.id !== task.id);
//       renderTasks();
//     });

//     li.appendChild(deleteBtn);
//     taskList.appendChild(li);
//   });
// }