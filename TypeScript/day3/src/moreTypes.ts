// type assertion is like tell typescript "trust me , i know this value's type"

let response: any = "42";

let numericLength: number = (response as string).length;

console.log(numericLength);

type Book = {
    name: string
}
let bookString = '{"name":"who moved my cheese?"}';
let bookObject = JSON.parse(bookString) as Book;
console.log(bookObject.name);

// as string doesn't check or change the value at runtime. Use it only when you're confident about the type

let value: unknown = "hello";
console.log((value as string).toUpperCase());

// type unknown : check before using means the value exists, but we don't know its type yet

function printValue(value: unknown){
    if (typeof value === "string"){
        console.log(value.toUpperCase());
    } else if (typeof value === "number"){
        console.log(value.toFixed(2));
    }
}
printValue("hello");
printValue(25);

// type never - something impossible like a value that should never exist in a particular situation, or a fn that never completes normally
// never = no possible value remains.

type Direction = "left" | "right";

function move(direction: Direction){
    switch (direction) {
        case "left":
            return "Moving Left";

        case "right":
            return "Moving Right";

        default: {
            const impossible: never = direction;
            return impossible;
        }
    }
}

let newValue:any;
newValue = "chai";
newValue = [1,2,3];
newValue = 2.5;
newValue.toUpperCase();

let anotherValue: unknown
anotherValue = "chai";
anotherValue = [1,2,3];
anotherValue = 2.5;
if (typeof anotherValue === "string"){
    anotherValue.toUpperCase();
}


try {
    console.log("try block");
} catch (error: unknown) {
    if (error instanceof Error){
         console.log(error.message);
    }
   console.log('Error',error);
}

const data: unknown = "sudheer das";
const strData: string = data as string;

type Role = "admin" | "user";
function redirectBasedOnRole(role:Role): void {
    if(role === "admin"){
        console.log("Redirecting to admin dashboard");
        return;   
    }
    if(role === "user"){
        console.log("Redirecting to user dashboard");
        return;
    }
    role;
}