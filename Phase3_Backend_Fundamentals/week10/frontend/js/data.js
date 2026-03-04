import { tasks, setTasks } from "./state";

export function addTask(text){
    const newTask = {
        id: Date.now(),
        text,
        completed: false
    }

    setTasks([...tasks, newTask]);
}

export function deleteTask(id){
    setTasks(tasks.filter(task => tasks.id != id));
}

export function toggleTask(id){
    setTasks(
        tasks.map(task => 
            task.id === id ? {...task, completed: !task.completed} : task 
        )
    );
}