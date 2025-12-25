// Block Scope (let & const)

//Variables declared inside { } using let or const.

if (true) {
  let x = 10;
  const y = 20;
}

console.log(x); // ❌ Error


//✔ Only exists inside the block
//❌ Not accessible outside


//⚠️ Important Note about var
if (true) {
  var z = 30;
}

console.log(z); // ✅ Works


// var ignores block scope
// This is why var is avoided today