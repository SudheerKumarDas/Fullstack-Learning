const students = [
        { name: "Aman", marks: 85 },
        { name: "Riya", marks: 62 },
        { name: "Karan", marks: 74 },
        { name: "Neha", marks: 45 },
        { name: "Vikram", marks: 90 }
];

const studentList = document.querySelector("#studentList")

// function renderStudents(students) {
//     for(let i=0;i<students.length;i++){
//         const li = document.createElement("li");
//         li.textContent = `${students[i].name}`; //innerText or textContent
//         studentList.appendChild(li);
//     }
// }

// renderStudents(students);

function renderStudents(students){
    studentList.innerText = "";
    if (students.length === 0) {
        const li = document.createElement("li");
        li.innerText = `No students available`;
        studentList.appendChild(li);
    } else {
        for(let i=0;i<students.length;i++){
        const li = document.createElement("li");
        li.innerText = `${students[i].name} - ${students[i].marks}`;
        studentList.appendChild(li);
    }
    }
}

renderStudents(students);

const passedList = document.querySelector("#passedList");

function getPassedStudent(students){
    let passedStudents = [];
    for(let i=0;i<students.length;i++){
        if(students[i].marks >= 70){
            passedStudents.push(students[i]);
        }
    }
    return passedStudents;
}

function renderPassedStudents(students){
    passedList.innerText = "";
    const passedStudentsList = getPassedStudent(students);
    if(passedStudentsList.length === 0){
        const li = document.createElement("li");
        li.innerText = `No passed Students`;
        passedList.appendChild(li);
    }else{
        for(let i=0;i<passedStudentsList.length;i++){
            const li = document.createElement("li");
            li.innerText = `${passedStudentsList[i].name}`
            passedList.appendChild(li);
        }
    }
}

renderPassedStudents(students);

