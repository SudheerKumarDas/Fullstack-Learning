const students = [
  { name: "Aman", marks: 85 },
  { name: "Riya", marks: 62 },
  { name: "Karan", marks: 74 },
  { name: "Neha", marks: 45 },
  { name: "Vikram", marks: 90 }
];

const expenses = [
  { title: "Food", amount: 500 },
  { title: "Travel", amount: 3000 },
  { title: "Shopping", amount: 1200 },
  { title: "Internet", amount: 800 }
];

function getPassedWithAverage(students) {
    let passedStudents=[];
    let sum=0,averageMarks;
    for(let i=0;i<students.length;i++){
        if(students[i].marks>=70){
            passedStudents.push(students[i]);//for student name only , we can do push students[i].name
            sum+=students[i].marks;
        }
    }
    averageMarks=sum/passedStudents.length;
    // if no student is passed then it will give NaN , so we can use here ternary operator like below
    // averageMarks = passedStudents.length ? sum/passStudents.length : 0;
    return {
        passedStudents,
        averageMarks
    }
}
const passedStudent=getPassedWithAverage(students);
console.log(passedStudent);

function getHighExpenseTotal(expenses) {
    let total=0;
    for(let i=0;i<expenses.length;i++){
        if(expenses[i].amount>=1000){
            total += expenses[i].amount;
        }
    }
    return total;
}
const getTotalExpenseAbove1000=getHighExpenseTotal(expenses);
console.log(getTotalExpenseAbove1000);

function countFailedStudents(students) {
   let failed=0;
   for(let i=0;i<students.length;i++){
    if(students[i].marks<70){
        failed++;
    }
   }
   return failed;
}
const failedStudents=countFailedStudents(students);
console.log(`failed students: ${failedStudents}`);

function generateReport(students, expenses) {
    let totalStudents=0, passedCount=0,failedCount=0,averageMarks=0,highExpenseTotal=0;
    totalStudents=students.length;
    failedCount=countFailedStudents(students);
    passedCount=students.length-failedCount;
    averageMarks=getPassedWithAverage(students).averageMarks;
    highExpenseTotal=getHighExpenseTotal(expenses);
    
    return {
        totalStudents,
        passedCount,
        failedCount,
        averageMarks,
        highExpenseTotal
    }
}

const generateReportCard = generateReport(students,expenses);
console.log(generateReportCard);