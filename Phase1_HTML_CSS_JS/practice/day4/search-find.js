const students = [
  { id: 1, name: "Aman", marks: 85 },
  { id: 2, name: "Riya", marks: 62 },
  { id: 3, name: "Karan", marks: 74 },
  { id: 4, name: "Neha", marks: 45 },
  { id: 5, name: "Vikram", marks: 90 }
];

const expenses = [
  { id: 1, title: "T-Shirt", amount: 1000 },
  { id: 2, title: "Headphones", amount: 3000 },
  { id: 3, title: "Shoes", amount: 4000 }
];

function findStudentByName(students, name) {
    let student;
    for(let i=0;i<students.length;i++){
        if(students[i].name===name){
            return students[i];
        }
    }
    return null;
}
console.log(findStudentByName(students, "Karan"));
console.log(findStudentByName(students, "Rahul"));

function studentExists(students, name) {
   for(let i=0;i<students.length;i++){
    if(students[i].name===name){
        return true;
    }
   }
   return false;
}
console.log(studentExists(students, "Karan"));
console.log(studentExists(students, "Rahul"));

function findExpenseByTitle(expenses, title) {
   for(let i=0;i<expenses.length;i++){
    if(expenses[i].title===title){
        return expenses[i];
    }
   }
   return null;
}
console.log(findExpenseByTitle(expenses, "Shoes"));
console.log(findExpenseByTitle(expenses, "Acessories"));

function findStudentById(students, id) {
    for(let i=0;i<students.length;i++){
        if(students[i].id===id){
            return students[i];
        }
    }
    return null;
}
console.log(findStudentById(students, 4));



function greet(name) {
  console.log("Hello, " + name + "!");
}

const message = greet("Alice"); //Output in console: Hello, Alice!
console.log(message); // Output: undefined
console.log(message); // Output: undefined

