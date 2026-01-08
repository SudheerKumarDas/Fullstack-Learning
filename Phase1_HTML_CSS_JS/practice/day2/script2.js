const expenses = [
  { id: 1, title: "T-Shirt", amount: 1200 },
  { id: 2, title: "Shoes", amount: 3500 },
  { id: 3, title: "Burger", amount: 300 },
  { id: 4, title: "Headphones", amount: 2800 },
  { id: 5, title: "Notebook", amount: 150 }
];
function getTotalExpense(expenses) {
  let total=0;
  for(let i=0;i<expenses.length;i++){
    total += expenses[i].amount;
  }
  return total;
}

function getHighestExpense(expenses) {
    let highestExpense=expenses[0].amount;
    for(let i=1;i<expenses.length;i++){
        if(expenses[i].amount>=highestExpense){
            highestExpense=expenses[i].amount;
        }
    }
    return highestExpense;
}
function getLowestExpense(expenses) {
    let lowestExpense=expenses[0].amount;
    for(let i=1;i<expenses.length;i++){
        if(expenses[i].amount<lowestExpense){
            lowestExpense=expenses[i].amount;
        }
    }
    return lowestExpense;
}
// Count how many expenses are above 1000
function expensesAbove1000(){
    let result=0;
    for(let i=0;i<expenses.length;i++){
        if(expenses[i].amount>1000){
            result++;
        }
    }
    return result;
}
// Return titles of expensive items (>1000)
function expensiveExpensesAbove1000(){
    let result=[];
    for(let i=0;i<expenses.length;i++){
        if(expenses[i].amount>1000){
            result.push(expenses[i].title);
        }
    }
    return result;
}