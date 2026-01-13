const title = document.querySelector("#title");
const des = document.querySelector(".des");
const btn = document.querySelector("#btn");

console.log(title, des, btn);

btn.addEventListener("click",()=>{
    title.innerText = "Title Text Changed!";
})

const info = document.querySelector("#info");
const toggleBtn = document.querySelector("#toggleBtn");

toggleBtn.addEventListener("click",()=>{
    if(info.style.display==="none"){
        info.style.display = "block";
    }else{
        info.style.display = "none";
    }
})