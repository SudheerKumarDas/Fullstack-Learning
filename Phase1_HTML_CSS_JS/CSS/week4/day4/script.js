document.getElementById("btn").addEventListener('click', function(){
    alert("buttton is clicked !");
})

const input = document.getElementById("name");

input.addEventListener("input", () => {
    console.log("Current value:", input.value);
});
