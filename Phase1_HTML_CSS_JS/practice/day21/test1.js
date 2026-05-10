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
    names : "sudheer",
    ages : 25
}
console.log(profile);
console.log(typeof(profile));

profile.name = "samrat";
console.log(profile);
//we can also access individual values from object

console.log(profile.name);

// destructuring 
// extracting values easily from arrays or objects

const [linux1,linux2]=linuxDistros;
console.log(linux1,linux2);

const {names, ages}=profile;
console.log(names,ages);

//template literals

let linux = "arch"
console.log(`Hello , ${linux}`);

let lines = `
    this is line 1
    this is line 2
    this is line 3
`
console.log(lines);

// spread operator
// copy or expands values

const arr1 = [1,2,3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

//objects spread operator on 
const user = {
    name: "sudheer"
}
const updatedUser = {
    ...user,
    age: 25
};
console.log(updatedUser);

// rest operator
//Collects multiple values into one.
const [first, ...second]=[1,2,3,4,5,6];
console.log(first, second);

//Loops and array methods
for(let i=0;i<5;i++){
    console.log(i);
}

const nums=[1,2,3,4,5]

for (const num of nums) {
    console.log(num);
}

//array methods
// map
const oddNumbers = [1,3,5,7,9,11];
const doubledOddNumbers = oddNumbers.map((num)=> num*2);
console.log(oddNumbers);
console.log(doubledOddNumbers);

const kvArray = [
    {key:1, value:10},
    {key:2, value:20},
    {key:3, value:30}
];

const reFormattedArray = kvArray.map(({key,value})=>({[key]:value}));
console.log(reFormattedArray);


const users = ["Ram","Hari"];
const result = users.map((user)=>`hello,${user}`);
console.log(result);

//filter
const numbers = [1,2,3,4,5,6];
const evenNums = numbers.filter((num)=>num%2===0);
console.log(evenNums);

//reduce method
const sumOfNums = numbers.reduce((acc,curr)=>{
    return acc+curr;
},0);
console.log(sumOfNums);

//find
const newUsers = [
    {id:1,name:"sudheer"},
    {id:2,name:"samrat"},
    {id:2,name:"sunidhi"}
];

const userFound = newUsers.find((user)=>user.id===2);//search and finds the first matched user id 
console.log(userFound);