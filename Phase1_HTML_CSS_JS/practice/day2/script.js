let expenses = [
    {title:"Tea", amount: 40, category:"Food"},
    {title:"Shirt", amount : 4000, category: "Clothing"},
    {title:"Coffee", amount: 120, category: "Food"}
];

function totalAmount(expenses){
    let sum = 0;
    for(let i=0;i<expenses.length;i++){
        sum = sum + expenses[i].amount;
    }
    return sum;
}

const result1 = totalAmount(expenses);
console.log(result1);


function getTotalPerCategory(expenses){
    let expensesCategory;
    let foodSum=0,clothingSum=0;
    for(let i=0;i<expenses.length;i++){
        if(expenses[i].category === "Food"){
           foodSum = foodSum + expenses[i].amount;
        }
        else if(expenses[i].category === "Clothing"){
            clothingSum = clothingSum + expenses[i].amount;
        }
    }
    return expensesCategory={
        Food : foodSum,
        Clothing : clothingSum
    };
}

const result2 = getTotalPerCategory(expenses);
console.log(result2);

function expensesAbove1000(expenses){
    let filteredExpenses = [];
    for(let i=0;i<expenses.length;i++){
        if(expenses[i].amount > 1000){
            filteredExpenses.push(expenses[i]);
        }
    }
    return filteredExpenses;
}
const result3 = expensesAbove1000(expenses);
console.log(result3);

function countExpensesItemsPerCategory(expenses){
    let expenseItems;
    let countFoodItems=0, countClothingItems=0;
    for(let i=0;i<expenses.length;i++){
        if(expenses[i].category === "Food"){
            countFoodItems = countFoodItems + 1;
        }
        else if(expenses[i].category==="Clothing"){
            countClothingItems = countClothingItems+1;
        }
    }
    return expenseItems = {
        Food : countFoodItems,
        Clothing: countClothingItems
    };
}
const result4 = countExpensesItemsPerCategory(expenses);
console.log(result4);
