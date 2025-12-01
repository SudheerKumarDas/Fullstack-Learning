const title = document.getElementById("title");
const input = document.getElementById("input");
const card = document.getElementById("card");
const hoverText = document.getElementById("hoverText");
const toggleMode = document.getElementById("toggleMode");

input.addEventListener("keyup",(e)=>{
    title.textContent = e.target.value || "My Card";
});

document.querySelectorAll(".color-btn").forEach(button => {
    button.addEventListener("click", ()=>{
        const color = button.getAttribute("data-color");
        card.style.background = color;
    });
});

card.addEventListener("mouseover",()=>{
    hoverText.classList.remove("hidden");
});

card.addEventListener("mouseout", ()=>{
    hoverText.classList.add("hidden");
});

card.addEventListener("dblclick",()=>{
    card.style.background = "white";
    title.textContent = "My Card";
    input.value = "";
});

toggleMode.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    card.classList.toggle("dark");
});