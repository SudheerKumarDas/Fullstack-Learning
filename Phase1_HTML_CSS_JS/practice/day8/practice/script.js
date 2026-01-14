// different button , same task
// const btn = document.querySelectorAll(".btnColor");
// const text = document.querySelector("#text");

// btn.forEach((button) => {
//     button.addEventListener("click",function(){
//         if (this.innerText === "Red"){
//             text.style.color = "red";
//         }else if(this.innerText === "Green"){
//             text.style.color = "green";
//         }else{
//             text.style.color = "yellow";
//         }
//     })
// });

// Counter App
// const minusBtn = document.querySelector("#minus");
// const count = document.querySelector("#count");
// const plusBtn = document.querySelector("#plus");

// function increaseCount(value){
//     return value = value + 1;
// }
// function decreaseCount(value){
//     return value = value - 1;
// }


// plusBtn.addEventListener("click",function(){
//         const counter = parseInt(count.innerText);
//         const newCount = increaseCount(counter);
//         count.innerText = newCount;
// })

// minusBtn.addEventListener("click",function(){
//         const counter = parseInt(count.innerText);
//         const newCount = decreaseCount(counter);
//         count.innerText = newCount;
// })

// Background changer
// const dark = document.querySelector("#dark");
// const light = document.querySelector("#light");

// dark.addEventListener("click",function(){
//     document.body.style.backgroundColor = "black";
//     document.body.style.color = "white" 
// })

// light.addEventListener("click",function(){
//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "black";
// })

//  Toggle Text
// const message = document.querySelector("#message");
// const toggleText = document.querySelector("#toggleText");

// toggleText.addEventListener("click", function(){
//     let textMessage = message.innerText;
//     let newMessage = textMessage==="Hello" ? "Goodbye" : "Hello";
//     message.innerText=newMessage; 
// })

// Disable button after submit
// const submitBtn = document.querySelector("#submit");
// const statusIn = document.querySelector("#status");

// submitBtn.addEventListener("click",function(){
//     statusIn.innerText = "Submitted";
//     submitBtn.disabled = true;
//     submitBtn.innerText = "Submitted"
// })

//  EXERCISE 6: Simple Password Reveal
//  Toggle password visibility
// const password = document.querySelector("#password");
// const showBtn = document.querySelector("#show");

// showBtn.addEventListener("click", function(){
//     if(password.type === "password"){
//         password.type = "text";
//         showBtn.innerText = "Hide";
//     }
//     else{
//         password.type = "password";
//         showBtn.innerText="Show";
//     }    
// })

// EXERCISE 7: Character Counter (Challenging)
// HTML
// <input type="text" id="name" />
// <p id="count">0 characters</p>

// Tasks 🎯
// Update character count while typing
// Show: X characters
// 📌 Event:
// input.addEventListener("input", ...)

const input = document.querySelector("#name");
const count = document.querySelector("#count");

input.addEventListener("input",function(){
        let characters = input.value.length;
        count.innerText = characters + " characters";
})