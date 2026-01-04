const students = [
    {name : "Sudheer", marks : 72},
    {name : "Suman", marks : 80},
    {name : "Suraj", marks : 89},
    {name : "Satya", marks : 65},
    {name : "Sunaina", marks : 40}
];

function getPassed(students){
    const passedStudent = [];
    for(let i=0; i<students.length;i++){
        if(students[i].marks >= 70){
            passedStudent.push(students[i]);
        }
    }
    return passedStudent;
}

const result = getPassed(students);
console.log(result);

//task 1
function getPassedName(students){
    const passedStudents = [];
    for(let i=0; i<students.length;i++){
        if(students[i].marks >= 70){
            passedStudents.push(students[i].name);
        }
    }
    return passedStudents;
}

const resultingNames = getPassedName(students);
console.log(resultingNames);

//task 2
// function passAndFailedStudents(students){
//     let newStudentsObject = {
//         passed : [],
//         failed : []
//     }

//     for(let i =0; i<students.length; i++){
//         if(students[i].marks >= 70){
//            newStudentsObject.passed.push(students[i].name);
//         }else{
//             newStudentsObject.failed.push(students[i].name);
//         }
//     }
//     return newStudentsObject;
// }

// const studentsFailPass = passAndFailedStudents(students);
// console.log(studentsFailPass);

function passAndFailedStudents(students){
    let newStudentsObject = {
        distinction : [],
        passed : [],
        failed : []
    }

    for(let i =0; i<students.length; i++){
        if(students[i].marks >= 84){
           newStudentsObject.distinction.push(students[i].name);
        }
        else if(students[i].marks >= 70 && students[i].marks < 84){
           newStudentsObject.passed.push(students[i].name);
        }
        else{
            newStudentsObject.failed.push(students[i].name);
        }
    }
    return newStudentsObject;
}

const studentsFailPass = passAndFailedStudents(students);
console.log(studentsFailPass);
