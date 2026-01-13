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

function studentsName(students){
    let names=[];
    for(let i=0;i<students.length;i++){
        names.push(students[i].name);
    }
    return names;
}

function passedStudents(students){
    let passed=[];
    for(let i=0;i<students.length;i++){
        if(students[i].marks>=70){
            passed.push(students[i]);
        }
    }
    return passed;
}

function getTotalMarks(students){
    let total =0;
    for(let i=0;i<students.length;i++){
        total += students[i].marks;
    }
    return total;
}


function studentWithHighestMarks(students){
    let student=students[0];
    for(let i=1;i<students.length;i++){
        if(students[i].marks>=student.marks){
            student=students[i];
        }
    }
    return student;
}


function countExpenses(expenses){
    let count = 0;
    for(let i=0;i<expenses.length;i++){
        if(expenses[i].amount>=1000){
            count++;
        }
    }
    return count;
}


function findStudentByName(students,name){
    for(let i=0;i<students.length;i++){
        if(students[i].name === name){
            return students[i];
        }
    }
    
    return null;
}


function addResult(students){
    let newStudentList=[];
    let newStudent;
    let result;
    for(let i=0;i<students.length;i++){
        // if(students[i].marks >= 70){
        //     result= "Pass"
        // }
        // else{
        //     result="Fail";
        // }
        result = students[i].marks>=70 ? "Pass" : "Fail";
        newStudent={
            name:students[i].name,
            marks:students[i].marks,
            result:result
        }
        newStudentList.push(newStudent);
    }
    return newStudentList;
}


function passedAndAverage(students){
    let count=0, sum=0;
    for(let i=0;i<students.length;i++){
        if(students[i].marks>=70){
            count=count+1;
            sum += students[i].marks;
        }
    }
    return {
        passedCount : count,
        averageMarks : count === 0 ? 0 : sum/count
    }
}


function expensesTotal(expenses){
    let totalExpenses=0, highExpenseTotal=0;
    for(let i=0;i<expenses.length;i++){
        if(expenses[i].amount>=1000){
            highExpenseTotal += expenses[i].amount;
        }
        totalExpenses += expenses[i].amount;
    }
    return {
        totalExpenses,
        highExpenseTotal
    }
}


function totalSummary(students,expenses){
    let totalStudents, passedCount, failedCount, averageMarks, highestMarks,highExpenseTotal;
    totalStudents=students.length;
    passedCount=passedStudents(students).length;
    failedCount=totalStudents-passedCount;
    averageMarks=passedAndAverage(students).averageMarks;
    highestMarks=studentWithHighestMarks(students).marks;
    highExpenseTotal=expensesTotal(expenses).highExpenseTotal;

    return {
        totalStudents,
        passedCount,
        failedCount,
        averageMarks,
        highestMarks,
        highExpenseTotal
    }
}