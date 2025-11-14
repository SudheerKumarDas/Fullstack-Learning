let student = [
    {name:"Sudheer",marks:90},
    {name:"Rina",marks:70},
    {name:"Bibek",marks:95}
]

let talentStudents = student.filter(student => student.marks > 80);
console.log(talentStudents);

let topper = student.reduce((max,s)=>{
    return s.marks > max.marks ? s : max;
});
console.log(topper);

let average = student.reduce((sum,s)=>sum+s.marks,0) / student.length;
console.log(average);