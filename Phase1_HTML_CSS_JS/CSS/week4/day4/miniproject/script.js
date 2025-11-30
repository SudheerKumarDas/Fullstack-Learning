let count = 0;

const countDisplay = document.getElementById("count");

document.getElementById("increase").addEventListener("click", function(){
    count++;
    countDisplay.textContent = count;
})

document.getElementById("decrease").addEventListener("click", function(){
    count--;
    countDisplay.textContent = count;
})

document.getElementById("reset").addEventListener("click", function(){
    count = 0;
    countDisplay.textContent = count;
})