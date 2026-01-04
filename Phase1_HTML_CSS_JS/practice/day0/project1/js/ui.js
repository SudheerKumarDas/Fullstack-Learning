// You must write functions for:
// Get passed students (marks ≥ 70)
// Get topper
// Calculate average marks
// Return students with grades
// A ≥ 90
// B ≥ 75
// C ≥ 60
// F < 60
// Output must be new arrays, not modified originals.

const students = [
    {name : "Sudheer", marks : 72},
    {name : "Suman", marks : 80},
    {name : "Suraj", marks : 89},
    {name : "Satya", marks : 65},
    {name : "Sunaina", marks : 40}
];

function getPassedStudentsNames(students){
    const result = {
        passed : [],
        failed : []
    }
    for(let i=0; i< students.length; i++){
        if(students[i].marks >= 70){
            result.passed.push(students[i].name);
        }else{
            result.failed.push(students[i].name);
        }
    }
    return result;
}

function getTopper(students){
    let topper=students[0];
    for(let i=0;i<students.length;i++){
        if(students[i].marks> topper.marks){
            topper=students[i];
        }
    }
    return topper;
}

function averageMarks(students){
    let sum = 0,avg = 0;
    for(let i=0;i<students.length;i++){
        sum = sum + students[i].marks;
    }
    avg = sum / students.length;
    return avg;
}

function assignGrades(students){
    const newStudentList = {};
    for(let i=0; i< students.length;i++){
        let grade;
        if(students[i].marks >= 90){
            grade="A";
        }else if(students[i].marks >= 75){
            grade = "B";
        }else if(students[i].marks >= 60){
            grade = "C";
        }else{
            grade="F";
        }
        newStudentList={
            name : students[i].name,
            marks: students[i].marks,
            grade: grade
        }
    }
    return newStudentList;
}