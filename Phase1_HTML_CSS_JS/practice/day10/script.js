let students = [
  { name: "Aman", marks: 85 },
  { name: "Riya", marks: 62 }
];

const nameInput = document.querySelector("#nameInput");
const marksInput = document.querySelector("#marksInput");
const addBtn = document.querySelector("#addBtn");
const studentList = document.querySelector("#studentList");

function renderStudents(students){
    studentList.innerText = "";
    if(students.length === 0){
        const li = document.createElement("li");
        li.innerText = `No Students Found`;
        studentList.appendChild(li);
    }else{
        for(let i=0;i<students.length;i++){
            const index = i;

            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = `delete`
            const editBtn = document.createElement("button");
            editBtn.innerText = `Edit`;
            const li = document.createElement("li");
            li.innerText = `${students[i].name}`;
            li.appendChild(deleteBtn);
            li.appendChild(editBtn);
            studentList.appendChild(li)

            deleteBtn.addEventListener("click",function(){
                if(confirm("Are you sure to delete?")){
                    students.splice(index,1);
                    renderStudents(students);
                }
            })
            editBtn.addEventListener("click",function(){
                nameInput.value = students[i].name;
                marksInput.value = students[i].marks;
                students.splice(index,1);
                renderStudents(students);
            })
        }
    }
}

renderStudents(students);

addBtn.addEventListener("click",function(){
    const name = nameInput.value;
    const marks = Number(marksInput.value);
   
    if(name.trim()==="" || marksInput.value.trim()==="") return 

    if (isNaN(marks)) return;
    
    const newStudent = {
            name,
            marks
        }
    students.push(newStudent);
    renderStudents(students);
    nameInput.value = "";
    marksInput.value = "";
    
})
