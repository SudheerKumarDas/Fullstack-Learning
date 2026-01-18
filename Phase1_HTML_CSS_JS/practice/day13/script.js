const nameInput = document.querySelector("#nameInput");
const marksInput = document.querySelector("#marksInput");
const addBtn = document.querySelector("#addBtn");
const error = document.querySelector("#error");


const students=[];
function addStudent(){
    let newStudent;
    const name = nameInput.value.trim();
    const marks = Number(marksInput.value);
    newStudent={
        name,
        marks
    }
    students.push(newStudent);
}


function validateInputs(){
    const name = nameInput.value.trim();
    const marks = marksInput.value;
    //checking input values
    if(name==="" || marks===""){
        error.innerText = "Name or Marks is empty!";
        return false;
    }

    //checking marks valid (0-100)
    const marksNum = Number(marks);
    if(marksNum<0 || marksNum >100){
        error.innerText = "Marks not valid!"
        return false;
    }
    return true;
}

function toggleButton(){
        addBtn.disabled = 
            nameInput.value.trim()===""||
            marksInput.value === "";
}


nameInput.addEventListener("input",toggleButton);
marksInput.addEventListener("input",toggleButton);

function preventDuplicateName(students,name){
    for(let i=0;i<students.length;i++){
        if(students[i].name===name){
            error.innerText="Student already exists";
            return false;
        }
    }
    return true;
}

// We can also use this , the some method return at least one matching item
// function preventDuplicateName(students, name) {
//     const exists = students.some(s => s.name.toLowerCase() === name.toLowerCase());
    
//     if (exists) {
//         error.innerText = "Student already exists!";
//         return false;
//     }
//     return true;
// }

addBtn.addEventListener("click",function(){
    if(validateInputs()){
        const name = nameInput.value.trim();
        if(preventDuplicateName(students,name)){
            addStudent(students);
            nameInput.value = "";
            marksInput.value="";
            error.innerText = "Student added successfully!";
            toggleButton();
        }
    }
})

