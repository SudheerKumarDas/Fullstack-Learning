let expenses = [
  { title: "Tea", amount: 40, category: "Food" },
  { title: "Shirt", amount: 4000, category: "Clothing" },
  { title: "Coffee", amount: 120, category: "Food" },
  { title: "Shoes", amount: 2500, category: "Clothing" },
  { title: "Burger", amount: 300, category: "Food" }
];

//     Get average expense amount
function avgExpense(expenses){
    let sum=0;
    for(let i=0;i<expenses.length;i++){
        sum+=expenses[i].amount;
    }
    return sum/expenses.length;
}

//     Get highest expense object
function highestExpense(expenses){
    let highestExpenseItem = expenses[0];
    for(let i=1;i<expenses.length;i++){
        if(expenses[i].amount>highestExpenseItem.amount){
            highestExpenseItem = expenses[i];
        }
    }
    return highestExpenseItem;
}

//     Get lowest expense object
function lowestExpense(expenses){
    let lowestExpenseItem = expenses[0];
    for(let i=1;i<expenses.length;i++){
        if(expenses[i].amount<lowestExpenseItem.amount){
            lowestExpenseItem = expenses[i];
        }
    }
    return lowestExpenseItem;
}

//     Check if any expense is above 5000 (return true/false)
function checkExpenseAbove5000(expenses){
    let checker = false;
    for(let i=0;i<expenses.length;i++){
        if(expenses[i].amount>5000){
            checker = true;
            break;
        }
    }
    return checker;
}

//     Get expenses count above a given value
function expensesCountAmount(expenses, value){
    let num=0;
    for(let i=0;i<expenses.length;i++){
        if(expenses[i].amount>value){
            num=num+1;
        }
    }
    return num;
}