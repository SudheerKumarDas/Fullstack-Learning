let task = {
    title : "Learn JavaScript",
    completed : false,
    priority : "High"
}

// function toggleTask(task){
//   return  task.completed = !task.completed;
// }

// toggleTask(task);
// console.log(task);

// toggleTask(task);
// console.log(task);

function printSummary(task){
    let status = (task.completed === false) ? task.completed="pending" : "done"; 
    console.log(`Task: ${task.title} | status : ${status} | priority : ${task.priority}`);
}
printSummary(task);
