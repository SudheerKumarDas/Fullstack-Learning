const students = [
    {name : "Sudheer", marks : 88},
    {name : "Aayush", marks : 72},
    {name : "Bibek", marks : 95},
    {name : "Samrat", marks : 60},
    {name : "Rina", marks : 85},
];

console.log("All students : ");
students.forEach(element => {
    console.log(`${element.name}: ${element.marks}`);
});

let total = students.reduce((sum, student) => sum + student.marks, 0);
let average = total / students.length;
console.log("\nAverage Marks : ", average);

let topper = students.reduce((prev, current)=>{
    return (prev.marks > current.marks) ? prev : current;
});
console.log("\nTopper : ",topper.name, "with ", topper.marks);

let passedStudents = students.filter(student => student.marks >= 70);
console.log("\nPassed Students : ");
passedStudents.forEach(s => console.log(s.name));

let sorted = [...students].sort((a,b)=> b.marks - a.marks);
console.log("\nSorted by Marks (High -> Low) : ");
sorted.forEach(s => console.log(`${s.name} : ${s.marks}`));