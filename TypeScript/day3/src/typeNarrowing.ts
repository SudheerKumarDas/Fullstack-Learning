function getChai(kind: string | number){
    if(typeof kind === 'string'){
        return `Making ${kind} chai...`
    }
    return `Chai order: ${kind}`
}

function serveChai(msg?: string){
    if(msg){
        return `Serving ${msg}`
    }
    return `Serving default masala chai`
}

function orderChai(size:"small"|"medium"|"large"|number){
    if(size === "small"){
        return `small cutting chai...`
    }
    if(size === "medium" || size === "large"){
        return `make extra chai`
    }
    return `chai order #${size}`
}


class KulhadChai{
    serve(){
        return `Serving Kulhad Chai`
    }
}

class CuttingChai{
    serve(){
        return `Serving Cutting Chai`
    }
}

function serve(chai:KulhadChai|CuttingChai){
    if(chai instanceof KulhadChai){
        return chai.serve();
    }
}

type ChaiOrder = {
    type:string
    sugar:number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item:ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai: ${item}`
}

function isStringArray(arr: unknown): arr is string[]{
    return true;
}


// let us discuss a problem 

// function printValue(value: string | number){
//     console.log(value);
// }

// it means the value can either be string or a number the | symbol represents a union type
// typescript knows the value could be either type but it cannot assume which one you have at a particular moment

// function printValue(value: string | number){
//     console.log(value.toUpperCase()); // here typescript gives error as it is protecting us from a potential runtime error because strings have toUpperCase() fn but numbers do not have
// }


// so the sol is check the type before using a type-specific operations

function printValue(value: string | number){
    if( typeof value === "string"){ // here typeof value === "string" is a type guard
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}
// inside if block typescript narrows value from string or number to string
// now the above fn works , it saves us from runtime error now typescript knows what to do if string or number comes up and their specific ops


// one important thing typeof null return object

// type User = {
//     name: string;
// };

type Admin = {
    name: string;
    adminLevel: number
}

function showUser(user: User | Admin){
    if("adminLevel" in user){
        console.log(user.adminLevel);
    }else {
        console.log(user.name);
    }
}

// let us see another example 

type EmailNotificationn = {
    email:string
}
type PhoneNotification = {
    phone:string
}

function sendNotification(notification: EmailNotificationn | PhoneNotification){
    if("email" in notification){
        console.log(notification.email);
    }else {
        console.log(notification.phone);
    }
}

// get an example of instanceof type guard
class Dog{
    bark(){
        console.log("woff!");
    }
}

class Cat{
    meow(){
        console.log("meow!");
    }
}

function makeSound(animal: Dog | Cat){
    if (animal instanceof Dog){
        animal.bark();
    }else{
        animal.meow();
    }
}

// custom type guard
type User = {
    id: number;
    name: string
};

// writing a type guard
function isUser(value: unknown): value is User {
    return(
        typeof value === "object" && 
        value !== null &&
        "id" in value &&
        typeof value.id === "number" &&
        "name" in value &&
        typeof value.name === "string"
    );
}