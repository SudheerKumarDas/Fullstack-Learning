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
console.log(x);// it is not block scoped


// Functions

function myName(){
    console.log(name);
}

myName();

//functions with parameter
function greetings(name){
    console.log(name);
}
greetings("Sudheer");

//let's create a function which returns value
function add(){
    return 2+5;
}

const addedNum = add();
console.log(addedNum);

// this is normal function
function mul(num1, num2){
    return num1*num2;
}
const mulNum = mul(2,4);
console.log(mulNum);

// Arrow functions to write functions faster and it is way more easier
const multipliedNum = (num1, num2) => num1 * num2;
console.log(multipliedNum(2,4));

//we can also write like this
const multiplyFn = (num1, num2) => {
    return num1*num2;
}
console.log(multiplyFn(2,5));

//Now move on to arrays and objects

const linuxDistros = ["ubuntu", "arch", "pop Os", "kali linux"];
console.log(linuxDistros[0]);
console.log(linuxDistros[1]);
console.log(linuxDistros[2]);
console.log(linuxDistros[3]);
console.log(linuxDistros[4]);// it gives undefined value 


linuxDistros.push("omarchy linux");
console.log(linuxDistros[0]);
console.log(linuxDistros[1]);
console.log(linuxDistros[2]);
console.log(linuxDistros[3]);
console.log(linuxDistros[4]);// now it gives value because we push to pos 5 in array

const profile = {
    name : "sudheer",
    age : 25
}
console.log(profile);
console.log(typeof(profile));

profile.name = "samrat";
console.log(profile);
//we can also access individual values from object

console.log(profile.name);

