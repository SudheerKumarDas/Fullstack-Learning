let num = 4;

function printNum(){
    console.log(num);
}

//here num is defined above globally, not inside any fn and so everything fns or others can access the num variable
//this is an example of global scope in JS
//✅ num can be used anywhere
//❌ Too many global variables = bad practice,Disadvantage is that there will be complicated when we initializa so many variables