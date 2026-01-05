let tasks = [
    { id : 1,title:"Go To Gym 1",completed : false},
    { id : 2,title:"Go To Gym 2",completed : false},
    { id : 3,title:"Go To Gym 3",completed : true},
    { id : 4,title:"Go To Gym 4",completed : false}
];

function addTask(tasks,id,title,completed){
    tasks.push({
        id:id,
        title:title,
        completed:completed
    });
}

addTask(tasks,5,"Go to Gym 5",false);
console.log(tasks);

function markAsCompleted(tasks,id){
    for(let i=0;i<tasks.length;i++){
        if(tasks[i].id===id){
            tasks[i].completed = true;
        }
    }
    return tasks;
}

const result = markAsCompleted(tasks,4);
console.log(result);

function deleteTask(tasks,id){
        for(let i=0; i<tasks.length;i++){
            if(tasks[i].id === id){
                tasks.splice(i,1);
                break;
            }
        }
        return tasks;
}
const deletedTask = deleteTask(tasks,2);
console.log(deletedTask);


function completedTask(tasks){
    const newTasks = [];
    for(let i=0; i<tasks.length;i++){
        if(tasks[i].completed==true){
            newTasks.push(tasks[i]);
        }
    }
    return newTasks;
}

const completeTasks = completedTask(tasks);
console.log(completeTasks);

function pendingTask(tasks){
    const pending = [];
    for(let i=0; i<tasks.length;i++){
        if(tasks[i].completed==false){
            pending.push(tasks[i]);
        }
    }
    return pending;
}
const pendingTasks = pendingTask(tasks);
console.log(pendingTasks);
