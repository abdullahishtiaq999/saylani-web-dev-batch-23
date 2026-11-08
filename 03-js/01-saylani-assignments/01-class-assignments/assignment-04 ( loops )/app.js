// task 1

// for(var i = 1; i <= 10; i++) {
//     console.log(i);
// }

// task 2

// for(var i = 10; i > 0; i--) {
//     console.log(i);
// }

// task 3

// for (var i = 1; i <= 5; i++) {
//     console.log(i, "Hello JavaScript");
// }

// task 4

// var fruits = ["Apple", "Banana", "Mango", "Orange"];

// for (var i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// };

// task 5

// var marks = [50, 60, 70, 80];
// var totalMarks = 0;
// for (var i = 0; i < marks.length; i++) {
//     totalMarks += marks[i]
// };

// console.log(totalMarks);

// task 6

// var marks = [50, 60, 70, 80];
// var totalMarks = 0;
// var percentage = null;
// for (var i = 0; i < marks.length; i++) {
//     totalMarks += marks[i];
// };

// percentage = totalMarks / marks.length;
// console.log(percentage);

// task 7

// var colors = ["Red", "Green", "Blue", "Yellow"];
// for (var i = colors.length - 1; i >= 0; i--) {
//     console.log(colors[i]);
// };

// task 8

// var nums = [5, 10, 15, 20];
// for (var i = 0; i < nums.length; i++) {
//     console.log(nums[i] + " at " + i + " index.");
// }

// task 9

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// console.log(cities.length);

// task 10

// var nums = [2, 5, 8, 11, 14, 17, 20];
// for (var i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 === 0) {
//         console.log("even number is", nums[i]);
//     };
// };

// task 11

// var marks = [50, 60, 45, 39, 78, 44];
// var totalMarks = 600;
// var totalObtainedMarks = 0;
// var percentage = null;
// var grade = null;

// for (var i = 0; i < marks.length; i++) {
//     totalObtainedMarks += marks[i];
// };

// percentage = totalObtainedMarks / totalMarks * 100;

// if (percentage >= 90 && percentage <= 100) {
//     grade = "A-one"
//     console.log("Your Marks: " + marks);
//     console.log("Your Percentage " + percentage);
//     console.log("Your Grade: " + grade);
// } else if (percentage >= 80) {
//     grade = "A"
//     console.log("Your Marks: " + marks);
//     console.log("Your Percentage " + percentage);
//     console.log("Your Grade: " + grade);
// } else if (percentage >= 70) {
//     grade = "B"
//     console.log("Your Marks: " + marks);
//     console.log("Your Percentage " + percentage);
//     console.log("Your Grade: " + grade);
// } else if (percentage >= 60) {
//     grade = "C"
//     console.log("Your Marks: " + marks);
//     console.log("Your Percentage " + percentage);
//     console.log("Your Grade: " + grade);
// } else if (percentage >= 0) {
//     grade = "Fail"
//     console.log("Your Marks: " + marks);
//     console.log("Your Percentage " + percentage);
//     console.log("Your Grade: " + grade);
// } else {
//     console.log("Not valid marks");
// };

// task 12

// var nums = [1, 2, 3, 4, 5, 6, -7, 8, 934, -65, 23, 65];
// var largestNumber = nums[0];
// var smallestNumber = nums[0];
// var evenNumberList = [];
// var oddNumberList = [];
// var positiveNumberList = [];
// var negativeNumberList = [];

// for (var i = 0; i < nums.length; i++) {

//     // even and odd numbers

//     if (nums[i] % 2 === 0 && nums[i] > 0) {
//         evenNumberList.push(nums[i]);
//     } else if (nums[i] !== 0 && nums[i] > 0) {
//         oddNumberList.push(nums[i]);
//     };

//     // smallest and largest numbers

//     if (largestNumber < nums[i]) {
//         largestNumber = nums[i];
//     };

//     if (smallestNumber > nums[i]) {
//         smallestNumber = nums[i];
//     };

//     // positive and negative numbers

//     if (nums[i] > 0) {
//         positiveNumberList.push(nums[i]);
//     } else if (nums[i] < 0) {
//         negativeNumberList.push(nums[i])
//     }

// };

// console.log("Largest Number:", largestNumber);
// console.log("Smallest Number:", smallestNumber);
// console.log("Even Numbers:", evenNumberList);
// console.log("Odd Numbers:", oddNumberList);
// console.log("Positive Numbers:", positiveNumberList);
// console.log("Negative Numbers:", negativeNumberList);

// task 13

// var userName = prompt("Please Enter Your User Name");
// if (userName === "admin123") {
//     var userPass = +prompt("Please Enter Your Password");
//     if (userPass === 1234) {
//         console.log("Welcome Back");
//     } else {
//         console.log("Wrong Password");
//     };
// } else {
//     console.log("Wrong Username");
// };

// task 14

// var products = ["rice", "sugar", "milk", "oil", "tea"];
// var prices = [180, 150, 240, 500, 200];
// var totalPrice = 0;
// var disc = 0;

// for (var i = 0; i < products.length; i++) {
//     console.log("Price of " + products[i] + " is " + prices[i]);
//     totalPrice += prices[i];
// };

// if (totalPrice >= 1500) {
//     disc = 20;
// } else if (totalPrice > 1200) {
//     disc = 15;
// } else if (totalPrice > 1000) {
//     disc = 10;
// } else {
//     disc = 0;
// };

// if (totalPrice > 1000) {
//     console.log("congrats you got " + disc + "% discount. your bill before discount is: " + totalPrice + " and after discount is: " + (totalPrice - (totalPrice * disc / 100)));
// } else if (totalPrice > 1200) {
//     console.log("congrats you got " + disc + "% discount. your bill before discount is: " + totalPrice + " and after discount is: " + (totalPrice - (totalPrice * disc / 100)));
// } else if (totalPrice >= 1500) {
//     console.log("congrats you got " + disc + "% discount. your bill before discount is: " + totalPrice + " and after discount is: " + (totalPrice - (totalPrice * disc / 100)));
// } else {
//     console.log("Your total bill is: " + totalPrice);
// };

// task 15

// var names = ["abdullah", "ali", "ahmed", "aryan", "altaf"];
// var attend = [77.2, 84, 68.7, 81, 49];
// var allowedStudentsList = [];
// var notAllowedStudentsList = [];
// var minAtten = 75;

// for (var i = 0; i < names.length; i++) {
//     if (attend[i] >= minAtten) {
//         allowedStudentsList.push(names[i]);
//     } else {
//         notAllowedStudentsList.push(names[i]);
//     };
// };

// console.log("Allowed Students are:", allowedStudentsList);
// console.log("Not allowed Students are:", notAllowedStudentsList);

// task 16

// var secNum = 8;
// var guessesList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (var i = 0; i < guessesList.length; i++) {
//     if (guessesList[i] > secNum) {
//         console.log("To High");
//     } else if (guessesList[i] < secNum) {
//         console.log("To Low");
//     } else {
//         console.log("Correct");
//     };
// };

// task 17

// var moviesList = ["dhurandar", "pushpa", "bahubali", "pk", "3 idiots", "money heist", "squid game", "dhool", "dhamaal"];
// var ratingsList = [4.5, 8, 9.6, 8.7, 9, 10, 7.5, 6.2, 7];

// for (var i = 0; i < moviesList.length; i++) {
//     if (ratingsList[i] >= 8) {
//         console.log(moviesList[i] + " is Excellent");
//     } else if (ratingsList[i] >= 6) {
//         console.log(moviesList[i] + " is Good");
//     } else if (ratingsList[i] >= 5) {
//         console.log(moviesList[i] + " is Average")
//     } else {
//         console.log(moviesList[i] + " is Poor")
//     };
// };

// task 18

// var temp = [30, 40, 78, 15];

// for (var i = 0; i < temp.length; i++) {
//     if (temp[i] >= 40) {
//         console.log("Temperature is Hot")
//     } else if (temp[i] >= 30) {
//         console.log("Temperature is Normal")
//     } else if (temp[i] >= 20) {
//         console.log("Temperature is Cold");
//     } else {
//         console.log("Temperature is Very Cold");
//     };
// };

// task 19

// var balance = 83465;
// var trans = [
//     {
//         withdraw: 1200,
//         deposit: 4000
//     },
//     {
//         withdraw: 1800,
//         deposit: 1000
//     },
//     {
//         withdraw: 600,
//         deposit: 2500
//     }
// ];

// for (var i = 0; i < trans.length; i++) {
//     balance += trans[i].deposit;
//     balance -= trans[i].withdraw;
// }
// console.log(balance)

// task 20

// var subjectsList = [78, 69, 40, 89, 50];
// var totalMarks = 0;
// var percentage = 0;

// for (var i = 0; i < subjectsList.length; i++) {
//   totalMarks += subjectsList[i];

//   if (subjectsList[i] < 40) {
//     console.log("You Failed in Subject " + (i + 1));
//   }
// }

// percentage = (totalMarks / (subjectsList.length * 100)) * 100;

// console.log("Total Marks: " + subjectsList.length * 100);
// console.log("Obtained Marks: " + totalMarks);
// console.log("Percentage: " + percentage + "%");

// task 21

// var fruits = ["mango", "apple", "banana", "orange", "grapes"];
// var fruitIndex = -1;
// var userFruit = prompt("Please Enter a Fruit that you don't like");

// if (userFruit !== null) {
//   userFruit.toLowerCase().trim();
// }

// for (var i = 0; i < fruits.length; i++) {
//   if (userFruit === fruits[i]) {
//     fruitIndex = i;
//   }
// }

// if (fruitIndex !== -1) {
//   fruits.splice(fruitIndex, 1);
//   console.log("Updated Array:", fruits);
// } else {
//   console.log("Sorry, we don't have the " + userFruit + " fruit.");
// }

// task 22

// var foodItemsList = ["meat", "fish", "milk", "snacks", "oil"];
// var pricesList = [1400, 560, 240, 100, 500];
// var totalPrice = 0;

// for (var i = 0; i < foodItemsList.length; i++) {
//   var isFood = confirm("Would you like to buy " + foodItemsList[i]);

//   if (isFood) {
//     totalPrice += pricesList[i];
//   }
// }

// console.log("Your Total bill is: " + totalPrice);

// task 23

// var salariesList = [14000, 56000, 40000, 98000, 125000];
// var highestSalary = salariesList[0];
// var bonusAmount = 0;

// for (var i = 0; i < salariesList.length; i++) {
//   if (highestSalary < salariesList[i]) {
//     highestSalary = salariesList[i];
//   }
// }

// if (highestSalary >= 120000) {
//   bonusAmount = (highestSalary * 20) / 100;
// } else if (highestSalary >= 100000) {
//   bonusAmount = (highestSalary * 15) / 100;
// } else if (highestSalary >= 50000) {
//   bonusAmount = (highestSalary * 10) / 100;
// } else {
//   bonusAmount = (highestSalary * 8) / 100;
// }

// highestSalary += bonusAmount;

// console.log(
//   "Your Salary has incresed by Rs. " +
//     bonusAmount +
//     " and your final salary is Rs. " +
//     highestSalary
// );

// task 24

// var agesList = [24, 16, 57, 40, 32, 89];
// var childs = [];
// var adults = [];
// var teenagers = [];
// var middle_aged = [];
// var seniors = [];

// for (var i = 0; i < agesList.length; i++) {
//   if (agesList[i] >= 65) {
//     seniors.push(i);
//   } else if (agesList[i] >= 40) {
//     middle_aged.push(i);
//   } else if (agesList[i] >= 20) {
//     adults.push(i);
//   } else if (agesList[i] >= 13) {
//     teenagers.push(i);
//   } else {
//     childs.push(i);
//   }
// }

// console.log("Total Seniors are: " + seniors.length);
// console.log("Total Middle Aged are: " + middle_aged.length);
// console.log("Total Adults are: " + adults.length);
// console.log("Total TeenAgers are: " + teenagers.length);
// console.log("Total Childs are: " + childs.length);
