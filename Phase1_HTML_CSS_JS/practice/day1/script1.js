const students = [
  { name: "Aman", marks: 85 },
  { name: "Riya", marks: 62 },
  { name: "Karan", marks: 74 },
  { name: "Neha", marks: 45 },
  { name: "Vikram", marks: 90 }
];

// 1.passed students
function passedStudent(students){
    let passedStudentList=[];
    for(let i=0;i<students.length;i++){
        if(students[i].marks>=70){
            passedStudentList.push(students[i]);
        }
    }
    return passedStudentList;
}
// 2.failed students
function failedStudent(students){
    let failedStudentList=[];
    for(let i=0;i<students.length;i++){
        if(students[i].marks<70){
            failedStudentList.push(students[i]);
        }
    }
    return failedStudentList;
}
// 3.print Student Names Only
function studentNames(students){
    let studentList=[];
    for(let i=0;i<students.length;i++){
            studentList.push(students[i].name);
    }
    return studentList;
}
//Split Passed & Failed
// {
//   passed: [ ... ],
//   failed: [ ... ]
// }
function passedAndFailed(students){
    let passed=[],failed=[];
    for(let i=0;i<students.length;i++){
        if(students[i].marks>=70){
            passed.push(students[i].name);
        }else{
            failed.push(students[i].name);
        }
    }
    return {
        passed:passed,
        failed:failed
    }
}