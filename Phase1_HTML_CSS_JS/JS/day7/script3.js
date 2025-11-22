const students = [
    {name : "Aryan", marks : 90},
    {name : "Bobby", marks : 98},
    {name : "Aarti", marks : 60},
    {name : "Shambhu", marks : 70},
    {name : "Sudheer", marks : 80}
]

function getGrade(marks){
    if(marks>= 90) return "A";
    if(marks>=75) return "B";
    if(marks>=60) return "C";
    else return "F";
}

function assignGrades(students){
    students.forEach(s => {
        s.grades = getGrade(s.marks);
    });
}

function getAverage(students){
    const total = students.reduce((sum,s) => 
        sum + s.marks , 0)
    return total / students.length;
}

function getTopper(students){
    return students.reduce((a,b)=> a.marks > b.marks ? a : b);
}


//add new student 
students.push({name : "Samrat", marks : 50});
console.log(students);

assignGrades(students);
console.log(students);

const averageValue = getAverage(students);
console.log(averageValue);

const topper = getTopper(students);
console.log(`topper : ${topper.name} ${topper.marks}`);
