const students = [
  { id: 1, name: "Aman", marks: 85 },
  { id: 2, name: "Riya", marks: 62 },
  { id: 3, name: "Karan", marks: 74 },
  { id: 4, name: "Neha", marks: 45 },
  { id: 5, name: "Vikram", marks: 90 }
];

function assignGrades(students){
    let grade = "";
    let result=[];
    for(let i=0;i<students.length;i++){
        if(students[i].marks>=80){
            grade = "A";
        }else if(students[i].marks>=60){
            grade = "B";
        }else{
            grade = "C"
        }
        let newStudent={
            id:students[i].id,
            name:students[i].name,
            marks:students[i].marks,
            grade:grade
        }
        result.push(newStudent);
    }
    return result;
}
const newResult = assignGrades(students);
console.log(newResult);

// Pass if marks ≥ 50
function addResult(students){
    let newResult=[];
    for(let i=0;i<students.length;i++){
        let result="";
        if(students[i].marks>=50){
            result="pass";
        }else{
            result="fail";
        }
        let newStudent={
            id:students[i].id,
            name:students[i].name,
            marks:students[i].marks,
            result:result
        }
        newResult.push(newStudent);
    }
    return newResult;
}
const result2 = addResult(students);
console.log(result2);

function addPercentages(students){
    let result=[];
    for(let i=0;i<students.length;i++){
        let percentage;
        percentage=((students[i].marks/100)*100);
        let newStudent={
            id:students[i].id,
            name:students[i].name,
            marks:students[i].marks,
            percentage:percentage
        }
        result.push(newStudent);
    }
    return result;
}
const result3 = addPercentages(students);
console.log(result3);

function createSummary(students){
    let totalStudents=0, passed=0, failed=0, averageMarks=0;
    let sum=0;
    for(let i=0;i<students.length;i++){
        totalStudents ++;
        if(students[i].marks>=50){
            passed++;
        }else{
            failed++;
        }
        sum=sum+students[i].marks;
    }
    averageMarks=sum/students.length;
    return {
        totalStudents,
        passed,
        failed,
        averageMarks
    }
}
const result4 = createSummary(students);
console.log(result4);

console.log(students);