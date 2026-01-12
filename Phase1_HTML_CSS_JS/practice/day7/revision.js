//get passed students : marks>=70
function getPassedStudents(students){
    let passedStudents=[];
    for(let i=0;i<students.length;i++){
        if(students[i].marks>=70){
            passedStudents.push(students[i]);
        }
    }
    if(passedStudents.length===0){
        return 0;
    }
    return passedStudents;
}

function countFailedStudents(students){
    let failed=0;
    for(let i=0;i<students.length;i++){
        if(students[i].marks<70){
            failed++;
        }
    }
    return failed;
}

// function getAverageMarksPassed(students){
//     let sum=0,count=0;
//     for(let i=0;i<students.length;i++){
//         if(students[i].marks>=70){
//             sum+=students[i].marks;
//             count++;
//         }
//     }
//     return sum/count;
// }

//OR
function getAverageMarksPassed(students){
    let sum =0;
    let passed = getPassedStudents(students);
    for(let i=0;i<passed.length;i++){
        sum+=passed.marks;
    }
    if(passed.length===0){
        return 0;
    }
    return sum/passed.length;
}

const expenses = [
  { title: "Food", amount: 300 },
  { title: "Internet", amount: 1200 },
  { title: "Travel", amount: 800 },
  { title: "Books", amount: 450 }
];

function getHighExpenses(expenses) {
    let highExpenses=[];
    for(let i=0;i<expenses.length;i++){
        if(expenses[i].amount>500){
            highExpenses.push(expenses[i]);
        }
    }
    return highExpenses;
}

function getHighExpenseTotal(expenses) {
    let highExpenses=getHighExpenses(expenses);
    let sum=0;
    for(let i=0;i<highExpenses.length;i++){
        sum+=highExpenses[i].amount;
    }
    return sum;
}

