// Create an array of student objects:
// let students = [
//   { name: "Alice", marks: 85 },
//   { name: "Bob", marks: 65 },
//   { name: "Charlie", marks: 75 }
// ];
// Print names of students who scored above 70.
// Calculate the average marks of all students.
// Find the student with the highest marks.

let students = [
    {name: "Alice", marks : 85},
    {name: "Bob", marks : 65},
    {name: "Charlie", marks : 75}
];

function printNamesAbove70(students){
    const newStudentArray = [];
    for(let i=1; i<students.length;i++){
        if(students[i].marks > 70){
            newStudentArray.push(students[i].name);
        }
    }
    return newStudentArray;
}

function avgMarks(students){
    let sum=0;
    for(let i=0; i<students.length;i++){
        sum = sum + students[i].marks;
    }
    return sum/students.length;
}

function topper(students){
    let topper= students[0];
    for(let i=0;i<students.length;i++){
        if(students[i].marks >= topper.marks){
            topper = students[i];
        }
    }
    return topper;
}