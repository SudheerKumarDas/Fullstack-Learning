//Variables declared inside a function.

function printNum(){
    const num = 20;
    console.log(num);
}

//Here only the fn printNum can access the num variable , except printNum fn , no one can access the variable num
//✅ num works only inside the function
//❌ Outside code cannot access it