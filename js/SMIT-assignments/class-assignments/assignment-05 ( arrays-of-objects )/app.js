// task 1

// var colors = ["red" , "green" , "blue" , "yellow"];
// console.log(colors[0]);
// console.log(colors[colors.length -1]);
// colors.splice(colors.indexOf("blue"), 1, "black");
// console.log(colors);

// task 2

// var student = {
//   name: "ali",
//   age: 20,
//   city: "karachi",
// };

// console.log(student.name);
// console.log(student.city);
// student.city = "lahore";
// console.log(student);

// task 3

// var students = [
//     {
//         name: "ali",
//         marks: 70,
//         atten: true
//     },
//     {
//         name: "ahmed",
//         marks: 50,
//         atten: false
//     },
//     {
//         name: "zubair",
//         marks: 90,
//         atten: true
//     }
// ];

// console.log(students[0].name);
// console.log(students[1].atten);
// console.log(students[2].marks = 95);
// console.log(students[1].atten = false);
// console.log(students);

// task 4

// for (var i = 0; i < students.length; i++) {
//     console.log(students[i].name + " - " + students[i].marks + " - " + students[i].atten);
// }

// task 5

// var totalMarks = 0;
// var avgMarks = 0;

// for (var i = 0; i < students.length ; i++) {
//     totalMarks += students[i].marks;
//     students[i].marks += 5;
// };

// avgMarks = totalMarks / students.length;
// console.log(students);
// console.log("Total Marks are:" + " " + totalMarks + " and average are: " + avgMarks);

// task 6

var marksList = [
  {
    subject: "biology",
    marks: 83,
  },
  {
    subject: "physics",
    marks: 61,
  },
  {
    subject: "chemistry",
    marks: 34,
  },
  {
    subject: "mathematics",
    marks: 76,
  },
  {
    subject: "pakistan studies",
    marks: 55,
  },
];

var totalMarks = 0;
var percentage = null;

for (var i = 0; i < marksList.length; i++) {
  totalMarks += marksList[i].marks;

  if (marksList[i].marks < 40) {
    console.log("You Failed in " + marksList[i].subject);
  }
}

percentage = (totalMarks / (marksList.length * 100)) * 100;

console.log("Total Marks: " + marksList.length * 100);
console.log("Obtained Marks: " + totalMarks);
console.log("Percentage: " + percentage + "%");
