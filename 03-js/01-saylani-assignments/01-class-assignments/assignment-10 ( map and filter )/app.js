// Data

const products = [
    {
        id: 1,
        name: "iPhone 15",
        category: "Mobile",
        price: 250000,
        stock: 10,
        brand: "Apple",
        rating: 4.8,
    },
    {
        id: 2,
        name: "Galaxy S24",
        category: "Mobile",
        price: 220000,
        stock: 0,
        brand: "Samsung",
        rating: 4.6,
    },
    {
        id: 3,
        name: "MacBook Air M3",
        category: "Laptop",
        price: 350000,
        stock: 5,
        brand: "Apple",
        rating: 4.9,
    },
    {
        id: 4,
        name: "Dell XPS 13",
        category: "Laptop",
        price: 280000,
        stock: 3,
        brand: "Dell",
        rating: 4.5,
    },
    {
        id: 5,
        name: "AirPods Pro",
        category: "Accessories",
        price: 65000,
        stock: 15,
        brand: "Apple",
        rating: 4.7,
    },
    {
        id: 6,
        name: "Galaxy Buds",
        category: "Accessories",
        price: 35000,
        stock: 0,
        brand: "Samsung",
        rating: 4.3,
    },
    {
        id: 7,
        name: "HP Pavilion",
        category: "Laptop",
        price: 180000,
        stock: 7,
        brand: "HP",
        rating: 4.2,
    },
    {
        id: 8,
        name: "Samsung A55",
        category: "Mobile",
        price: 120000,
        stock: 12,
        brand: "Samsung",
        rating: 4.4,
    },
];

// task 1

// const numbers = [1, 2, 3, 4, 5]
// const addedNumberList = numbers.map(v => v + v)

// console.log(numbers)
// console.log(addedNumberList)

// task 2

// const numbers = [5, 10, 15, 20]
// const incrementNumberList = numbers.map(v => v + 10)

// console.log(numbers)
// console.log(incrementNumberList)

// task 3

// const names = ["ali", "sara", "ahmed"]
// const uppNames = names.map(v => v.toUpperCase())

// console.log(names)
// console.log(uppNames)

// task 4

// const numbers = [1, 2, 3, 4, 5, 6]
// const evenNumbers = numbers.filter(v => v % 2 === 0)

// console.log(numbers)
// console.log(evenNumbers)

// task 5

// const numbers = [5, 12, 8, 20, 3, 15]
// const greThan10Numbers = numbers.filter(v => v > 10)

// console.log(numbers)
// console.log(greThan10Numbers)

// task 6

// const names = ["Ali", "Ahmed", "Sara", "Usman", "John"]
// const modifiedNames = names.filter(v => v.length > 4)

// console.log(names)
// console.log(modifiedNames)

// task 7

// const numbers = [2, 6, 8, 3, 10]
// const modifiedNumbers = numbers.filter(v => v > 5).map(v => v + v)

// console.log(numbers)
// console.log(modifiedNumbers)

// task 8

// const numbers = [-3, 2, -5, 4, 7, -1]
// const modifiedNumbers = numbers.filter(v => v > 0).map(v => v * v)

// console.log(numbers)
// console.log(modifiedNumbers)

// task 9

// const prices = [100, 250, 500, 1000]
// const modifiedPrices = prices.map(v => Math.round(v * 1.15))

// console.log(prices)
// console.log(modifiedPrices)

// task 10

// const names = ["Ali", "John", "Sara", "Usman", "Bilal", "Peter"]
// const modifiedNames = names.filter(v => v.toLowerCase().includes("a"))

// console.log(names)
// console.log(modifiedNames)

// task 11

// const students = [
//   { name: "Ali", marks: 45 },
//   { name: "Sara", marks: 78 },
//   { name: "Ahmed", marks: 32 },
//   { name: "Usman", marks: 65 }
// ]
// const modifiedStudents = students.filter(v => v.marks >= 50)

// console.log(students)
// console.log(modifiedStudents)

// task 12

// const users = [
//   { name: "Ali", age: 22, active: true },
//   { name: "Sara", age: 19, active: true },
//   { name: "Ahmed", age: 25, active: false },
//   { name: "Usman", age: 30, active: true }
// ]
// const modifiedUsers = users.filter(v => v.age > 20 && v.active)

// console.log(users)
// console.log(modifiedUsers)

// task 13

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// const modifedNumbers = numbers.filter(v => v % 2 === 0).map(v => v * v)

// console.log(numbers)
// console.log(modifedNumbers)

// task 14

// const products = [
//     { name: "Mouse", price: 500 },
//     { name: "Keyboard", price: 1500 },
//     { name: "Monitor", price: 25000 },
//     { name: "USB", price: 700 }
// ]
// const modfiedProducts = products.filter(v => v.price > 1000).map(v => v.name)

// console.log(products)
// console.log(modfiedProducts)

// task 15

// const students = [
//     { name: "Ali", marks: 45 },
//     { name: "Sara", marks: 80 },
//     { name: "Ahmed", marks: 55 },
//     { name: "Usman", marks: 30 },
//     { name: "John", marks: 90 }
// ]
// const modifiedStudents = students.filter(v => v.marks >= 50).map(v => v.name)

// console.log(students)
// console.log(modifiedStudents)

// task 16

// const users = [
//     { name: "Ali", age: 17 },
//     { name: "Sara", age: 22 },
//     { name: "Ahmed", age: 19 },
//     { name: "Usman", age: 15 }
// ]
// const modifiedUsers = users.filter(v => v.age >= 18).map(v => v.name.toUpperCase())

// console.log(users)
// console.log(modifiedUsers)

// task 17

// const products = [
//     { name: "Laptop", price: 80000, inStock: true },
//     { name: "Mouse", price: 500, inStock: false },
//     { name: "Keyboard", price: 1500, inStock: true },
//     { name: "Monitor", price: 25000, inStock: false }
// ]
// const modifiedProducts = products.filter(v => v.inStock).map(v => v.price)

// console.log(products)
// console.log(modifiedProducts)

// task 18

// const students = [
//     { name: "Ali", marks: 65 },
//     { name: "Sara", marks: 72 },
//     { name: "Ahmed", marks: 88 },
//     { name: "Usman", marks: 55 }
// ]
// const modifiedStudents = students.filter(v => v.marks >= 70).map(v => v.marks + 5)

// console.log(students)
// console.log(modifiedStudents)

// task 19

// const users = [
//     { username: "ali123" },
//     { username: "sara" },
//     { username: "ahmed786" },
//     { username: "john" },
//     { username: "usman99" }
// ]
// const modifiedUsers = users.filter(v => v.username.length > 5).map(v => v.username)

// console.log(users)
// console.log(modifiedUsers)

// task 20

// const students = [
//     { name: "Ali", age: 17, marks: 80 },
//     { name: "Sara", age: 20, marks: 75 },
//     { name: "Ahmed", age: 19, marks: 55 },
//     { name: "Usman", age: 22, marks: 90 },
//     { name: "John", age: 16, marks: 95 }
// ]
// const modifiedStudents = students.filter(v => v.marks >= 60 && v.age >= 18).map(v => v.name.toUpperCase())

// console.log(students)
// console.log(modifiedStudents)

// task 21

// const names = ["aLI", "sARA", "AHMED", "uSMAN"]
// const modifiedNames = names.map(v => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase())

// console.log(names)
// console.log(modifiedNames)

// task 22

// const users = [
//     { name: "Ali", username: "ali123" },
//     { name: "Sara", username: "sara99" },
//     { name: "Ahmed", username: "ahmed786" }
// ]
// const modifiedUsers = users.map(v => v.username)

// console.log(users)
// console.log(modifiedUsers)

// task 23

// const users = [
//     { name: "Ali", age: 22 },
//     { name: "Sara", age: 19 },
//     { name: "Ahmed", age: 25 }
// ]
// const modifiedUsers = users.map(v => {
//     v.status = "active"
//     return v
// })

// console.log(users)
// console.log(modifiedUsers)

// task 24

// const temperatures = [0, 10, 20, 30, 40]
// const modifiedTemperatures = temperatures.map(v => (v * 9/5 ) + 32)

// console.log(temperatures)
// console.log(modifiedTemperatures)

// task 25

// const numbers = [10, 15, 20, 30, 45, 50, 60]
// const modifiedNumbers = numbers.filter(v => v % 3 === 0 && v % 5 === 0)

// console.log(numbers)
// console.log(modifiedNumbers)

// task 26

// const users = [
//     { name: "Ali", age: 17 },
//     { name: "Sara", age: 22 },
//     { name: "Ahmed", age: 16 },
//     { name: "Usman", age: 25 }
// ]
// const modifiedUsers = users.filter(v => v.age >= 18)

// console.log(users)
// console.log(modifiedUsers)

// task 27

// const products = [
//     { name: "Laptop", price: 80000 },
//     { name: "Mouse", price: 500 },
//     { name: "Keyboard", price: 1500 },
//     { name: "USB", price: 700 }
// ]
// const modifiedProducts = products.filter(v => v.price < 1000)

// console.log(products)
// console.log(modifiedProducts)

// task 28

// const modifiedArray = products.map(v => v.name)
// console.log(modifiedArray)

// task 29

// const modifiedArray = products.map(v => v.price)
// console.log(modifiedArray)

// task 30

// const modifiedArray = products.map(v => `${v.name} - Rs. ${v.price}`)
// console.log(modifiedArray)

// task 31

// const modifiedArray = products.map(v => v.discountedPrice = v.price * 0.90)
// console.log(modifiedArray)

// task 32

// const modifiedArray = products.filter(v => v.stock > 0).map(v => v.name)
// console.log(modifiedArray)

// task 33

// const modifiedArray = products.filter(v => v.category === "Mobile").map(v => v.name)
// console.log(modifiedArray)

// task 34

// const modifiedArray = products.filter(v => v.price > 200000).map(v => v.name)
// console.log(modifiedArray)

// task 35

// const modifiedArray = products.filter(v => v.rating >= 4.5).map(v => v.name)
// console.log(modifiedArray)

// task 36

// const modifiedArray = products.filter(v => v.brand === "Apple").map(v => v.name)
// console.log(modifiedArray)

// task 37

// const modifiedArray = products.filter(v => v.price < 200000 && v.stock > 0).map(v => v.name)
// console.log(modifiedArray)

// task 38

// const modifiedArray = products.filter(v => v.stock > 0 && v.category === "Laptop").map(v => v.name)
// console.log(modifiedArray)

// task 39

// const modifiedArray = products.filter(v => v.brand === "Apple").map(v => ({name: v.name, discountedPrice: v.price * 0.85}))
// console.log(modifiedArray)

// task 40

// const modifiedArray = products.filter(v => v.stock > 0 && v.category === "Mobile").map(v => `${v.name} - Rs. ${v.price}`)
// console.log(modifiedArray)