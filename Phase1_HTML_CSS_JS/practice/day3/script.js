const students = [
  { name: "Amit", marks: 82 },
  { name: "Sita", marks: 55 },
  { name: "Ram", marks: 68 },
  { name: "Gita", marks: 91 }
];

//     Return passed students (marks ≥ 70)
function passedStudents(students){
    let passedStudentsList=[];
    for(let i=0;i<students.length;i++){
        if(students[i].marks>=70){
            passedStudentsList.push(students[i]);
        }
    }
    return passedStudentsList;
}

//     Return failed students
function failedStudents(students){
    let failedStudentsList=[];
    for(let i=0;i<students.length;i++){
        if(students[i].marks<70){
            failedStudentsList.push(students[i]);
        }
    }
    return failedStudentsList;
}

//     Calculate average marks
function avgMarks(students){
    let sum =0;
    for(let i=0;i<students.length;i++){
        sum+=students[i].marks;
    }
    return sum/students.length;
}

//     Find topper name
function topper(students){
    let topperStudent = students[0];
    for(let i=1;i<students.length;i++){
        if(students[i].marks >= topperStudent.marks){
            topperStudent = students[i];
        }
    }
    return topperStudent;
}

//     Return a new array with status: "Pass" | "Fail"
function passFail(students){
    let fail=[],pass=[];
    for(let i=0;i<students.length;i++){
        if(students[i].marks>=70){
            pass.push(students[i]);
        }
        else{
            fail.push(students[i]);
        }
    }
    return {
        pass:pass,
        fail:fail
    }
}