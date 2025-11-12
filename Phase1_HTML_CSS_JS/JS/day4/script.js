// function declaration

function greet(){
    console.log("hello");
}
greet();

//function expression

//sayHi();   //gives error cannot access sayHi before initialization
const sayHi = function(){
    console.log("HI");
};

//Scope in js

//global scope 
let username = "Sudheer";
function showUser(){
    console.log(username);
}
showUser();

//function scope 
function demo(){
    let message = "Hello buddy";
}
//console.log(message); // gives error because message is only in demo function , works only inside demo fn

{
    let a = 10;
    var b = 20;
}
console.log(b);//var is fn scoped
//console.log(a);//gives error because let is block-scoped , only works inside a block

// A closure is when a function remembers variables from where it was created, even after that outer function has finished executing.

if (Math.random()>0.5){
    var x = 1;
}else{
    var x = 2;
}
console.log(x);

// if (Math.random()>0.5){
//     const x = 1;
// }else{
//     const x = 2;
// }
//console.log(x);// this gives error because const is block scoped

// Lexical scoping (also called static scoping) is a rule that determines where variables can be accessed in your code — based on where they are written (declared) in the source code, not where they are called.

function makeFunc(){
    const name = "Mozilla";
    function displayName(){
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();

// A callback is a function passed as an argument to another function to run later.

function greeting(name, callback){
    console.log("Hi "+name);
    callback();
}

function sayBye(){
    console.log("Goodbye!!");
}

greeting("Sudheer",sayBye);