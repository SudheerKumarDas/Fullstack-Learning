const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

document.getElementById("addBtn").addEventListener("click", () => {
    result.textContent = Number(num1.value) + Number(num2.value);
});

document.getElementById("subBtn").addEventListener("click", () => {
    result.textContent = Number(num1.value) - Number(num2.value);
});

document.getElementById("mulBtn").addEventListener("click", () => {
    result.textContent = Number(num1.value) * Number(num2.value);
});

document.getElementById("divBtn").addEventListener("click", () => {
    if (num2.value == 0) {
        result.textContent = "Cannot divide by zero";
    } else {
        result.textContent = Number(num1.value) / Number(num2.value);
    }
});
