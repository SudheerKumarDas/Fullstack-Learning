let students = [
  { name: "Aman", marks: 85 },
  { name: "Riya", marks: 62 },
  { name: "Amanw", marks: 86 },
  { name: "Riyaw", marks: 69 }
];

function saveStudents() {
  localStorage.setItem("students", JSON.stringify(students));
}

function addStudent(name, marks){
    let newStudent = {
        name,
        marks
    }
    students.push(newStudent);
}
addStudent("shisir", 50);
saveStudents();

function deleteStudent(index,students){
    students.splice(index,1)
}
deleteStudent(1);
saveStudents();

function editStudent(index,students){
    students[index].name = "Susan"
    students[index].marks =87;
}

editStudent(2,students);
saveStudents();

// let students = [];

function loadStudents() {
  const data = localStorage.getItem("students");
  if (data) {
    students = JSON.parse(data);
  }
}
