const students = [
    {name : "Sudheer", marks: 88},
    {name : "Aayush", marks : 72},
    {name : "Bibek", marks : 95},
    {name : "Samrat", marks: 60},
    {name : "Rina", marks: 85}
];

//display all students
const resultDiv = document.getElementById("results");
students.forEach(student => {
    const p = document.createElement('p');
    p.textContent = `${student.name}: ${student.marks}`;
    resultDiv.appendChild(p);
});

//show Topper student
document.getElementById('showTopper').addEventListener('click',()=>{
    let topper = students.reduce((prev,curr)=> (prev.marks > curr.marks ? prev : curr));
    const topperDIv = document.getElementById('topperStudent');
    topperDIv.innerText = `Topper : ${topper.name} with ${topper.marks} marks`;
});