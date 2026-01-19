const titleInput = document.querySelector("#title");
const addBtn = document.querySelector("#addBtn");
const todos_list = document.querySelector("#todos-list");
const error = document.querySelector("#error");

let todos = [];

function addTodo(todos){
    title = titleInput.value.trim();
    todos.push(title);
    titleInput.value = "";
    saveTodos();
}

function deleteButton(){
    const button = document.createElement("button");
    button.innerText = `Delete`;
    saveTodos();
    return button;
}

function renderTodo(todos){
    todos_list.innerText = "";
    for(let i=0;i<todos.length;i++){
        const index=i;
        let li = document.createElement("li");
        li.innerText = `${todos[i]}`
        todos_list.appendChild(li);
        const btn = deleteButton();
        li.appendChild(btn);
        btn.addEventListener("click",function(){
            todos.splice(index,1);
            renderTodo(todos);
        })
    }
}

addBtn.addEventListener("click",function(){
    if(isValidate()){
        addTodo(todos);
        renderTodo(todos);
    }
})

// 4️⃣ Validation
// Empty input ❌
// Show error message
// Button disabled when input is empty (bonus)

function isValidate(){
    const title = titleInput.value.trim();
    if(title===""){
        error.innerText=`Enter your todo`;
        return false;
    }
    error.innerText = ``;
    return true;
}

// 5️⃣ localStorage (VERY IMPORTANT)
// Save todos to localStorage
// Load todos on page refresh
// App should remember data
function saveTodos(){
    localStorage.setItem("todos",JSON.stringify(todos))
}
