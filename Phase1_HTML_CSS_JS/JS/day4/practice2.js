// closure based counter 
function createCounter(){
    let count = 0;

    return{
        increment : function(){
            count++;
            console.log("count :",count);
        },
        getCount : function(){
            console.log("Current count :",count);
        },
        reset : function(){
            count = 0;
            console.log("Counter reset to 0");
        }
    };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.getCount();
counter.reset();

//Delayed Message App using setTimeout() and Callbacks

function delayedMessage(message,delay,callback){
    console.log(`Message will appear in ${delay / 1000} seconds ...`);

    setTimeout(()=>{
        console.log(message);
        callback();
    },delay)
}

function messageAfter(){
    console.log("Message displayed successfully")
}

delayedMessage("Keep Learning JS ,Bud",3000,messageAfter)

//Rewrite a Function Declaration as a Function Expression

//Function Declaration
function greet(name){
    console.log("Hello "+name+" !");
}
greet("Sudheer");

//Function Expression
const greet1 = function(name){
    console.log("Hello "+name+" !!");
}
greet1("Sudheer");