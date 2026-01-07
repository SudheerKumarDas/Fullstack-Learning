let expenses = [
    {id:1, title:"t-shirt", amount:1000, category:"Clothing"},
    {id:2, title:"Headphones", amount:3000, category:"Acessories"},
    {id:3, title:"Mustang", amount:10000, category:"Travel"},
    {id:4, title:"track pants", amount:4000, category:"Clothing"},
    {id:5, title:"Burgers", amount:500, category:"Food"}
];

// Get total expense
function totalExpenses(expenses){
    let total=0;
    for(let i=0;i<expenses.length;i++){
        total += expenses[i].amount;
    }
    return total;
}

// Get expenses by category
function getExpenseByCategory(expenses,category){
    let expenseCategory=[];
    for(let i=0;i<expenses.length;i++){
        if(expenses[i].category===category){
            expenseCategory.push(expenses[i]);
        }
    }
    return expenseCategory;
}

// Find highest expense
function highestExpense(expenses){
    let highestExpense=expenses[0];
    for(let i=1;i<expenses.length;i++){
        if(expenses[i].amount>highestExpense.amount){
            highestExpense=expenses[i];
        }
    }
    return highestExpense;
}

// Delete an expense by id
function deleteExpense(expenses,id){
    for(let i=0;i<expenses.length;i++){
        if(expenses[i].id===id){
            expenses.splice(i,1);
            break;
        }
    }
    return expenses;
}

// Update an expense amount
function updateExpense(expenses,id,amount){
    for(let i=0;i<expenses.length;i++){
        if(expenses[i].id===id){
            expenses[i].amount=amount;
            break;
        }
    }
    return expenses;
}