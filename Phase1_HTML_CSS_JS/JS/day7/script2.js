const products = [
    {name : "Shirts", price : 800},
    {name : "Pants", price : 1500},
    {name : "Shoes", price : 2000},
    {name : "Cap", price : 400}
]

const affordable = products.filter(items => items.price <= 1000);

console.log("Affordable Products : ");
affordable.forEach(p => console.log(p.name,p.price));