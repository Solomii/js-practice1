// 1.Write a JavaScript program which compute, the average marks of the following students Then,
// this average is used to determine the corresponding grade.
let students = [
  ["John", 80],
  ["Bill", 77],
  ["David", 68],
  ["Ryan", 88],
  ["Nick", 95],
];
let grade = 0;
let averageGrade;
for (let i = 0; i < students.length; i++) {
  grade += students[i][1];
  averageGrade = grade / students.length;
}
console.log(`Averege grade: ${averageGrade}`);
if (averageGrade < 60) {
  console.log("Grade: F");
} else if (averageGrade < 70) {
  console.log("Grade: D");
} else if (averageGrade < 80) {
  console.log("Grade: C");
} else if (averageGrade < 90) {
  console.log("Grade: B");
} else if (averageGrade < 100) {
  console.log("Grade: A");
}

// 2. Write a JavaScript program to sum the multiples of 3 or 5 under 1000.
let sum = 0;
for (let i = 0; i < 1000; i++) {
  if (i % 3 == 0 || i % 5 === 0) {
    sum += i;
  }
}
console.log(sum);

// console.log(sum);
// 3. Write a JavaScript program to construct the following pattern, using a nested for loop.

// *

// * *

// * * *

// * * * *

// * * * * *

for (let i = 1; i <= 6; i++) {
  let rows = "";
  for (let j = 1; j < i; j++) {
    rows += "*";
  }
  console.log(rows);
}
