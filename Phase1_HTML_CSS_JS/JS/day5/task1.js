let nums = [2,3,5,4,6,7,9,8,12,15];
console.log(nums);

let even = nums.filter(p=>p%2==0);
console.log(even);

let double = nums.map(p=>p*2);
console.log(double);

let sum = nums.reduce((s,i)=>s+i,0);
console.log(sum);