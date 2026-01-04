const students = [
    {name:"Sudheer" , marks : 76},
    {name:"Samrat" , marks: 80},
    {name: "Surya" , marks: 60},
    {name : "Suyush" , marks: 30},
    {name: "Sushan" , marks:90}
];

function passedStudents(students){
    let newStudents = [];
    for(let i=0; i<students.length; i++){
         if(students[i].marks >= 70){
            newStudents.push(students[i]);
        }
    }
    return newStudents;
}

const result = passedStudents(students);
console.log(result);

function assignGrades(students){
    let grade="";
    const newStudents = [];
    for(let i=0;i<students.length;i++){
        if(students[i].marks >= 90){
            grade = "A";
        }
        else if(students[i].marks >= 75){
            grade = "B";
        }
        else if(students[i].marks >= 60){
            grade = "C"
        }
        else{
            grade = "F"
        }
    newStudents.push({
            name:students[i].name,
            marks:students[i].marks,
            grade: grade
        })
    }
    return newStudents;
}

const gradesAssigned = assignGrades(students);
console.log(gradesAssigned);