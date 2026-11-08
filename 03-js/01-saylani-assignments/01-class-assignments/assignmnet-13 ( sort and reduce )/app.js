const products = [
    { id: 1, name: "Laptop", quantity: 1, price: 90000, rating: 4.5 },
    { id: 2, name: "Mouse", quantity: 2, price: 1200, rating: 4.2 },
    { id: 3, name: "Keyboard", quantity: 8, price: 4500, rating: 4.9 },
    { id: 4, name: "Monitor", quantity: 2, price: 35000, rating: 4.3 },
    { id: 5, name: "Headphones", quantity: 5, price: 3000, rating: 4.8 },
    { id: 6, name: "Webcam", quantity: 6, price: 6500, rating: 4.1 }
];

// task 1

// products.sort((a,b) => a.price - b.price)
// console.log(products)

// task 2

// products.sort((a,b) => b.price - a.price)
// console.log(products)

// task 3

// products.sort((a,b) => a.name > b.name ? 1 : -1)
// console.log(products)

// task 4

// products.sort((a,b) => b.rating - a.rating)
// console.log(products)

// task 5

// const prod = products.filter((p) => p.price <= 10000).sort((a,b) => a.price - b.price)
// console.log(prod)

// task 6

// const prod = products.sort((a,b) => b.rating - a.rating).slice(0 , 3)
// console.log(prod)

// task 7

// const prod = products.sort((a,b) => a.price - b.price).slice(0 , 2)
// console.log(prod)

// task 8

// const prod = products.sort((a,b) => b.rating - a.rating).slice(0,3)
// console.log(prod)

// task 9

// products.sort((a,b) => a.rating !== b.rating ? b.rating - a.rating : a.price - b.price)
// console.log(products)

// ----- reduce method -----

// task 10

// const totalPrice = products.reduce((acc , curr) => acc + curr.price , 0)
// console.log(totalPrice)

// task 11

// const totalQuantity = products.reduce((acc , curr) => acc + curr.quantity , 0)
// console.log(totalQuantity)

// task 12

// const totalPrice = products.reduce((acc , curr) => acc + curr.price , 0)
// const averagePrice = Math.floor(totalPrice / products.length)

// console.log(averagePrice)

// task 13

// const mostExpensiveProduct = products.reduce((acc , curr) => curr.price > acc.price ? curr : acc)
// console.log(mostExpensiveProduct)

// task 14

// const mostCheapestProduct = products.reduce((acc , curr) => curr.price < acc.price ? curr : acc)
// console.log(mostCheapestProduct)

// task 15

// const highestRatedProduct = products.reduce((acc , curr) => curr.rating > acc.rating ? curr : acc)
// console.log(highestRatedProduct)

// task 16

// const prod = products.reduce((acc , curr) => curr.price > 5000 ? acc + 1 : acc , 0)
// console.log(prod)

// task 17

// const totalInventory = products.reduce((acc, curr) => acc + curr.price * curr.quantity , 0 )
// console.log(totalInventory)

// task 18

// const prod = products.reduce((acc , curr) => curr.rating > 4.3 ? acc + 1 : acc  , 0)
// console.log(prod)

// task 19

// const prod = products.reduce((acc , curr) => {
//     acc["Total Products"] += 1
//     acc["Total Quantity"] += curr.quantity
//     acc["Total Inventory"] += curr.quantity * curr.price

//     return acc

// } , {
//     "Total Products" : 0,
//     "Total Quantity" : 0,
//     "Total Inventory" : 0
// })

// console.log(prod)