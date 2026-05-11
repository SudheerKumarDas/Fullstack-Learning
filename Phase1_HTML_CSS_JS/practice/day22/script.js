// accessing DOM elements

const h1 = document.getElementById("heading");
const btn = document.getElementById("btn");

// DOM manipulation
h1.innerText = "New Heading..."
h1.innerHTML = "<span>Hello</span>"

//changing styles of html
h1.style.color="blue";
btn.style.background="pink";
btn.style.padding="10px 20px";
btn.style.fontWeight="700";

//creating a new element in js using DOM
const p = document.createElement("p");
p.textContent = "this is a new paragraph.";

// we also need to append the new created element to html page so
document.body.appendChild(p);