let cart = [
    {item : "shoes", price : 3000},
    {item : "T-shirts", price : 1500},
    {item : "Jeans", price : 2500},
];

let expensive = cart.filter(p=> p.price > 2000);
console.log(expensive);

let total = cart.reduce((sum,p)=> sum+p.price, 0);
console.log(total);