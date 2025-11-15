const students = [
    {name : "Sudheer", marks : 88},
    {name : "Aayush", marks : 72},
    {name : "Bibek", marks : 95},
    {name : "Samrat", marks : 60},
    {name : "Rina", marks : 85},
];

students.forEach(s=> console.log(`${s.name}:${s.marks}`));

function getGrades(marks){
    if(marks>=90) return "A";
    if(marks>=75) return "B";
    if(marks>=60) return "c";

    else return "F";
}

function assignGrades(students){
    students.forEach(student => {
    student.grades = getGrades(student.marks);
    })
}

function addStudent(name, marks){
    const student = {name, marks, grades : getGrades(marks)};
    students.push(student);
}

function getAverage(student){
    const total = student.reduce((sum,s)=>sum+ s.marks,0);
    const average = total / student.length;
    return average;
}

function getTopper(student){
    const topperStudent = student.reduce((best,curr)=> curr.marks > best.marks ? curr : best);
    return topperStudent;
}

function sortedByMarks(student){
   return  [...student].sort((a,b)=>b.marks - a.marks);

}

assignGrades(students);
addStudent("New Student", 77);
console.log("All Students:");
students.forEach(s => console.log(`${s.name} - ${s.marks} - Grade: ${s.grades}`));
console.log("\nAverage Marks:", getAverage(students));
let topper = getTopper(students);
console.log("\nTopper:", topper.name, "-", topper.marks, "-", topper.grades);
console.log("\nSorted List:");
sortedByMarks(students).forEach(s => console.log(`${s.name}: ${s.marks}`));