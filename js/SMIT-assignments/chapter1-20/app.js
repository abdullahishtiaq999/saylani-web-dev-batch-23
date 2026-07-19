// chapter 1 ( alerts ) -----------------------------

// task 1 :
// alert("Welcome to our website");

// task 2 :
// alert("Error! Please enter a valid password");

// task 3 :
// alert("Welcome to JS land... \nHappy Coding");

// task 4 :
// alert("Welcome to JS land");
// alert("Happy coding!");

// task 5 :
// task perform in browser console

// task 6 :
// task completed

// task 7 :
// task completed

// chapter 2 ( variables for strings ) -----------------------------\

// task 8 :
// var userName;

// task 9 :
// var myName = "Abdullah Ishtiaq";

// task 10 :
// var message;
// message = "Hello World";
// alert(message);

// task 11 :
// var name = "Abdullah";
// var age = 16;
// var certification = "Certified Mobile Application Development";
// alert(name);
// alert(age + " years old");
// alert(certification);

// task 12 :
// var food = "Pizza \nPizz \nPiz \nPi \nP";
// alert(food);
// var food = "Pizza";
// alert(food + "\n" + food.slice(0, 4) + "\n" + food.slice(0, 3) + "\n" + food.slice(0, 2) + "\n" + food.slice(0, 1));

// task 13 :
// var email = "abdullahmirzaishtiaq69@gmail.com";
// alert("My email address is " + email);

// task 14 :
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book " + book);

// task 15 :
// document.write("Yah! I can write HTML content through JavaScipt");

// task 16 :
// var design = "---- hello ----";
// alert(design);

// chapter 3 ( variables for numbers ) -----------------------------\

// task 17 :
// var age = 16;
// alert("I am " + age + " years old");

// task 18 :
// var trackCount = 14;
// alert("You have visited this site " + trackCount + " times");

// task 19 :
// var birthYear = 2009;
// var birthYearType = typeof birthYear;
// document.write("My birth year is " + birthYear + "<br />");
// document.write("Data type of my declared variable is " + birthYearType);

// task 20 :
// var storeName = "Star City"
// var visitorName = "Abdullah";
// var product = "T-shirts";
// var productCounts = 5;
// document.write("<b>" + visitorName + "</b>" + " ordered" + "<b>" + " " + productCounts + " " + product + "</b>" + " on" + " " + storeName + " clothing store");

// chapter 4 ( variables naming rules ) -----------------------------\

// task 21 :
// var one , two , three;

// task 22 :
// legal names :
// var name;
// var name1;
// var _name;
// var $name;
// var name$;
// illegal names :
// var 1name;
// var -name;
// var na-me
// var @name;
// var name#;

// task 23 :
// document.write("<h1>Rules for naming JS variables </h1> <br /> <br /> <br />");
// document.write("<div>Variables names can only contain number, $ and _. For example : $my_1stVariable</div>");
// document.write("<div>Variables must begin with a letter, $ or _. For example : $name, _name or name </div>");
// document.write("<div>Variables names are case sensitive</div>");
// document.write("<div>Variables names should not be JS keyword</div>");

// chapter 5 ( math expression ) -----------------------------\

// task 24 :
// var num1 = 20;
// var num2 = 2;
// var sum = num1 + num2;
// document.write("sum of " + num1 + " and " + num2 + " is " + sum);

// task 25 :
// var num1 = 20;
// var num2 = 2;
// var sub = num1 - num2;
// var mul = num1 * num2;
// var div = num1 / num2;
// document.write("<div>subtraction of " + num1 + " with " + num2 + " is " + sub + "</div>");
// document.write("<div>multiplication of " + num1 + " with " + num2 + " is " + mul + "</div>");
// document.write("<div>division of " + num1 + " with " + num2 + " is " + div + "</div>");

// task 26 :
// var num;
// document.write("<div>Value after variable declaration is " + num + "</div>");
// num = 5;
// document.write("<div>Initial Value " + num + "</div>");
// num++;
// document.write("<div>value after increment " + num + "</div>");
// num += 7;
// document.write("<div>value after addition " + num + "</div>");
// num--;
// document.write("<div>value after decrement " + num + "</div>");
// document.write("<div>the reminder " + num % 3 +"</div>");

// task 27 :
// var ticketPrice = 600;
// var ticketCounts = 5;
// document.write("<div>Total cost to buy " + ticketCounts + " tickets to a movie is " + ticketPrice * ticketCounts + "PKR</div>");

// task 28 :
// var num = 3;
// var numCount = 0;
// document.write("<h3>Table of " + num + "</h3>");
// document.write("<div>" + num + " x " + ++numCount + " is " + num * numCount + "</div>");
// document.write("<div>" + num + " x " + ++numCount + " is " + num * numCount + "</div>");
// document.write("<div>" + num + " x " + ++numCount + " is " + num * numCount + "</div>");
// document.write("<div>" + num + " x " + ++numCount + " is " + num * numCount + "</div>");
// document.write("<div>" + num + " x " + ++numCount + " is " + num * numCount + "</div>");
// document.write("<div>" + num + " x " + ++numCount + " is " + num * numCount + "</div>");
// document.write("<div>" + num + " x " + ++numCount + " is " + num * numCount + "</div>");
// document.write("<div>" + num + " x " + ++numCount + " is " + num * numCount + "</div>");
// document.write("<div>" + num + " x " + ++numCount + " is " + num * numCount + "</div>");
// document.write("<div>" + num + " x " + ++numCount + " is " + num * numCount + "</div>");

// task 29 :
// var cel = 25;
// var fahr = 70;
// document.write("<div>" + cel +  "C is " + ((cel * 9 / 5) + 32) + "F</div>");
// document.write("<div>" + fahr +  "F is " + ((fahr - 32) * 5 / 9) + "C</div>");

// task 29 :
// var item1Price = 650;
// var item1Quantity = 3;
// var item2Price = 100;
// var item2Quantity = 7;
// var shippingCharges = 100;

// document.write("<h1>Shopping Cart</h1> <br /><br /><br />");
// document.write("<div>Price of item 1 is " + item1Price + "</div>");
// document.write("<div>Quantity of item 1 is " + item1Quantity + "</div>");
// document.write("<div>Price of item 2 is " + item2Price + " </div>");
// document.write("<div>Quantity of item 2 is " + item2Quantity + "</div>");
// document.write("<div>Shipping Charges " + shippingCharges + "</div> <br /> <br />");
// document.write("Total cost of your order is " + ((item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges));
// console.log(item1Price * item1Quantity)

// task 30 :
// var totalMarks = 1100;
// var obtainedMarks = 850;
// document.write("<h1>Mark Sheet</h1> <br /><br /><br />");
// document.write("<div>Total marks: " + totalMarks + "</div>");
// document.write("<div>Obtained marks: " + obtainedMarks + "</div>");
// document.write("<div>Percentage: " + ((obtainedMarks / totalMarks) * 100) + "</div>");

// task 31 :
// var USD = 10;
// var SAR = 25;
// document.write("<h1>Currency in PKR</h1>");
// document.write("Total Currency in PKR: " + ((USD * 277.85) + (SAR * 74.05)));

// task 32 :
// var number = 2 + 2 * 10 / 2;
// console.log(number);

// task 33 :
// var currYear = 2026;
// var yearOfBirth = 2009;
// document.write("<h1>Age Calculator</h1> <br /><br /><br />");
// document.write("<div>Current Year: " + currYear + "</div>");
// document.write("<div>Year of Birth: " + yearOfBirth + "</div>");
// document.write("<div>Your Age is : " + (currYear - yearOfBirth) + "</div>");


// task 34 :
// var r = 10;
// var pie = 3.142;
// var circumference = ((2 * pie) * r);
// var area = pie * r**2;

// document.write("<h1>The Geometrizer</h1> <br /> <br /> <br />");
// document.write("<div>Radius of a circle: " + r + "</div>");
// document.write("<div>The circumference is: "  + circumference +"</div>");
// document.write("<div>The area is: " + area +"</div>");

// task 35 :
// var favSnack = "biryani";
// var currAge = 16;
// var maxAge = 80;
// var estAmount = 3;

// document.write("<h1>The lifetime supply calculator</h1> <br /><br /><br />");
// document.write("<div>Favourite Snack: " + favSnack + "</div>");
// document.write("<div>Current Age: " + currAge + "</div>");
// document.write("<div>Maximum Age: " + maxAge + "</div>");
// document.write("<div>Amount of snacks per day: " + estAmount + "</div>");
// document.write("<div>You will need: " + (maxAge - currAge) * 365 + "</div>");

// chapter 6 to 9 ( math expressions and string concatenation and prompts ) -----------------------------\

// task 36 :
// var a = 10;

// document.write("<div>Result:</div>");
// document.write("<div>The value of a is: " + a + "</div>");
// document.write("<div>----------------------------------------</div>");
// document.write("<div>The value of ++a is: " + ++a + "</div>");
// document.write("<div>Now the value of a is: " + a + "</div> <br /><br />");
// document.write("<div>The value of a++ is: " + a++ + "</div>");
// document.write("<div>Now the value of a is: " + a + "</div> <br /><br />");
// document.write("<div>The value of --a is: " + --a + "</div>");
// document.write("<div>Now the value of a is: " + a + "</div> <br /><br />");
// document.write("<div>The value of a-- is: " + a-- + "</div>");
// document.write("<div>Now the value of a is: " + a + "</div> <br /><br />");

// task 37 :
// var a = 2; // 1
// var b = 1; // 0
// var result = --a - --b + ++b + b--; // 3
//            1  -  0  +  1  + 1
//                1 + 1 + 1
//                    3

// document.write("<div>a is: " + a + "</div>");
// document.write("<div>b is: " + b + "</div>");
// document.write("<div>result is: " + result + "</div>");

// task 38 :
// var userName = prompt("Please Enter Your Name");
// alert("Welcome " + userName);

// task 39 :
// missing

// task 40 :
// var tableNumber = +prompt("Please Enter a Number" , 5);
// var num = 1;
// document.write(tableNumber + " x " + num + " = " +tableNumber * num++ + "<br />");
// document.write(tableNumber + " x " + num + " = " +tableNumber * num++ + "<br />");
// document.write(tableNumber + " x " + num + " = " +tableNumber * num++ + "<br />");
// document.write(tableNumber + " x " + num + " = " +tableNumber * num++ + "<br />");
// document.write(tableNumber + " x " + num + " = " +tableNumber * num++ + "<br />");
// document.write(tableNumber + " x " + num + " = " +tableNumber * num++ + "<br />");
// document.write(tableNumber + " x " + num + " = " +tableNumber * num++ + "<br />");
// document.write(tableNumber + " x " + num + " = " +tableNumber * num++ + "<br />");
// document.write(tableNumber + " x " + num + " = " +tableNumber * num++ + "<br />");
// document.write(tableNumber + " x " + num + " = " +tableNumber * num++);

// task 41 :
// var sub1 = "bio";
// var sub2 = "phy";
// var sub3 = "chem";
// var totalMarks = 100;
// var sub1ObtainedMarks = +prompt("Please Enter Obtain Marks of Bio");
// var sub2ObtainedMarks = +prompt("Please Enter Obtain Marks of Phy");
// var sub3ObtainedMarks = +prompt("Please Enter Obtain Marks of Chem");

// document.write(`<table>

// <tr>

// <th>Subject</th>
// <th>Total Marks</th>
// <th>Obtained Marks</th>
// <th>Percentage</th>

// </tr>'

// <tr>

// <td>${sub1}</td>
// <td>${totalMarks}</td>
// <td>${sub1ObtainedMarks}</td>
// <td>${(sub1ObtainedMarks / totalMarks) * 100}%</td>

// </tr>

// <tr>

// <td>${sub2}</td>
// <td>${totalMarks}</td>
// <td>${sub2ObtainedMarks}</td>
// <td>${(sub2ObtainedMarks / totalMarks) * 100}%</td>

// </tr>

// <tr>

// <td>${sub3}</td>
// <td>${totalMarks}</td>
// <td>${sub3ObtainedMarks}</td>
// <td>${(sub3ObtainedMarks / totalMarks) * 100}%</td>
// </tr>

// <tr>

// <td></td>
// <td>${totalMarks * 3}</td>
// <td>${sub1ObtainedMarks + sub2ObtainedMarks + sub3ObtainedMarks}</td>
// <td>${(((sub1ObtainedMarks / totalMarks) * 100) + ((sub2ObtainedMarks / totalMarks) * 100) + ((sub3ObtainedMarks / totalMarks) * 100)) / 3}%</td>

// </tr>

// </table>`)

// task 42 :
// missing

// chapter 6 to 9 ( if statement and comparison operators ) -----------------------------

// task 43 :
