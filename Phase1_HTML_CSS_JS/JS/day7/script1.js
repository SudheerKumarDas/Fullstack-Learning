const nums = [1,2,3,4,5,6,7,8,9,10];

let even=0, odd=0;

for (let num of nums) {
    if(num%2 === 0){
        even++;
    }else{
        odd++;
    }
}

console.log(`Even numbers : ${even} and odd numbers : ${odd}`);