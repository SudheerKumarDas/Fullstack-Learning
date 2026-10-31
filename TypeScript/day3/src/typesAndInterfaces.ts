type ChaiOrder = { 
    type: string; 
    sugar: number; 
    strong: boolean
};

function makeChai(order: ChaiOrder){
    console.log(order);
}

function serveChai(order: ChaiOrder){
    console.log(order);
}