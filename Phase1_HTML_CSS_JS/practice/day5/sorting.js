const students = [
  { id: 1, name: "Aman", marks: 85 },
  { id: 2, name: "Riya", marks: 62 },
  { id: 3, name: "Karan", marks: 74 },
  { id: 4, name: "Neha", marks: 45 },
  { id: 5, name: "Vikram", marks: 90 }
];

const numbers = [45, 12, 89, 34, 2, 67];

//ascending order
numbers.sort(function(a, b) {
    return a-b;
});
console.log(numbers);

//descending order
numbers.sort(function(a, b) {
    return b-a;
});
console.log(numbers);

students.sort(function(a, b) {
    return a.marks-b.marks;
});
console.log(students)

students.sort(function(a,b){
    return b.marks-a.marks;
})
console.log(students);

students.sort(function(a, b) {
    return a.name.localeCompare(b.name);
});
console.log(students);