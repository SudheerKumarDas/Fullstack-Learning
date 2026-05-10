// js variables 
const name = "Samrat";
console.log(name);

// but if we try to change the value , it gives error
//name = "sudheer";
//console.log(name);

//const and let are block-scoped , what it does mean that beyond the curly braces , it does not recognize the vaule

{
    let x=20;
    const y=2;
}
//console.log(x,y); here error comes like x is not defined becoz it is block scoped 
console.log(name);

{
    var x=2;
}
console.log(x);