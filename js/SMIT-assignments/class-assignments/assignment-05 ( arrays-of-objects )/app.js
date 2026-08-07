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

// var marksList = [
//   {
//     subject: "biology",
//     marks: 83,
//   },
//   {
//     subject: "physics",
//     marks: 61,
//   },
//   {
//     subject: "chemistry",
//     marks: 34,
//   },
//   {
//     subject: "mathematics",
//     marks: 76,
//   },
//   {
//     subject: "pakistan studies",
//     marks: 55,
//   },
// ];

// var totalMarks = 0;
// var percentage = null;

// for (var i = 0; i < marksList.length; i++) {
//   totalMarks += marksList[i].marks;

//   if (marksList[i].marks < 40) {
//     console.log("You Failed in " + marksList[i].subject);
//   }
// }

// percentage = (totalMarks / (marksList.length * 100)) * 100;

// console.log("Total Marks: " + marksList.length * 100);
// console.log("Obtained Marks: " + totalMarks);
// console.log("Percentage: " + percentage + "%");

// task 7

var products = [
  {
    id: 101,
    title: "Apple AirPods (3rd Generation)",
    description: "Wireless earbuds with spatial audio and long battery life.",
    price: 24999,
    variations: [
      { color: "white", quantity: 6 },
      { color: "black", quantity: 4 },
    ],
    reviews: [
      {
        id: 110,
        comment: "Amazing sound quality and battery life.",
        rating: 4.8,
        date: "02/08/2026",
        status: true,
      },
      {
        id: 111,
        comment: "A little expensive but worth it.",
        rating: 4.4,
        date: "02/08/2026",
        status: false,
      },
      {
        id: 112,
        comment: "Fit could be better.",
        rating: 3.8,
        date: "02/08/2026",
        status: true,
      },
    ],
  },
  {
    id: 102,
    title: "Samsung Galaxy Buds2 Pro",
    description: "Premium wireless earbuds with active noise cancellation.",
    price: 19999,
    variations: [
      { color: "graphite", quantity: 5 },
      { color: "white", quantity: 5 },
      { color: "purple", quantity: 5 },
    ],
    reviews: [
      {
        id: 120,
        comment: "Excellent noise cancellation.",
        rating: 4.7,
        date: "02/08/2026",
        status: true,
      },
      {
        id: 121,
        comment: "Very comfortable to wear.",
        rating: 4.6,
        date: "02/08/2026",
        status: true,
      },
      {
        id: 122,
        comment: "Battery could last longer.",
        rating: 3.9,
        date: "02/08/2026",
        status: true,
      },
    ],
  },
  {
    id: 103,
    title: "Sony WH-1000XM5",
    description: "Industry-leading wireless noise-canceling headphones.",
    price: 42999,
    variations: [
      { color: "black", quantity: 5 },
      { color: "silver", quantity: 3 },
    ],
    reviews: [
      {
        id: 130,
        comment: "Best headphones I've ever owned.",
        rating: 5.0,
        date: "02/08/2026",
        status: true,
      },
      {
        id: 131,
        comment: "Outstanding sound quality.",
        rating: 4.9,
        date: "02/08/2026",
        status: true,
      },
      {
        id: 132,
        comment: "Price is a bit high.",
        rating: 4.2,
        date: "02/08/2026",
        status: true,
      },
    ],
  },
];

// var totalRating = 0
// var avgRating = 0
// var reviewsCount = 0

// for (var i = 0; i < products.length; i++) {

//     for(var j =0 ; j < products[i].reviews.length; j++) {
//         totalRating += products[i].reviews[j].rating
//     }

//     avgRating = totalRating / products[i].reviews.length

//     reviewsCount = products[i].reviews.length

//     console.log(`Product => ${products[i].id} and avg rating ${avgRating}(${reviewsCount})`)

//     avgRating = 0
//     totalRating = 0
//     reviewsCount = 0
// }

// task 8

// for(var i =0; i < products.length; i++) {
//     console.log(products[i].title)
// }

// task 9

// for(var i =0; i < products.length; i++) {

//     if(products[i].price <= 25000) {
//         console.log(`Products That has less then 25k price is: ${products[i].title}`)
//     }
// }

// task 10

// var totalStock = 0
// for (var i = 0; i < products.length; i++) {

//     for(var j=0; j < products[i].variations.length; j++) {
//         totalStock += products[i].variations[j].quantity
//     }

//     console.log(`Total Available Stock of ${products[i].title} is ${totalStock}`)

//     totalStock = 0
// }

// task 11

// var totalStock = 0

// for(var i =0; i < products.length; i++) {

//     for(var j =0; j < products[i].variations.length; j++) {
//         totalStock += products[i].variations[j].quantity
//     }
// }

// console.log(`Total Available Stock of all Products are: ${totalStock}`)

// task 12

// for (var i = 0; i < products.length; i++) {

//     console.log(`${products[i].title}`)

//     for(var j =0; j < products[i].variations.length; j++) {

//         console.log(`${products[i].variations[j].color}`)
//     }

//     console.log(`----------`)

// }

// task 13

// for(var i =0; i < products.length; i++) {

//     for(var j=0; j < products[i].variations.length; j++) {

//         if(products[i].variations[j].color === "black") {
            
//             console.log(products[i].variations[j])
//         }
//     }

// }

// task 14

// for(var i =0; i < products.length; i++) {
    
//     for(var j =0; j < products[i].reviews.length; j++) {

//         if(products[i].reviews[j].status) {
//             console.log(products[i].reviews[j])
//         }
//     }
// }

// task 15

// var approvedStatus = 0

// for(var i =0; i < products.length; i++) {

//     for(var j =0; j < products[i].reviews.length; j++) {

//         if(products[i].reviews[j].status) {

//             approvedStatus++
//         }
//     }

//     console.log(`${products[i].title} => ${approvedStatus}`)

//     approvedStatus = 0
// }

// task 16