export let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

export let filter = "all";

export function setTasks(newTasks){
    tasks = newTasks;
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function setFilter(newFilter){
    filter = newFilter;
}