const products = [
    { id: 1, name: "Laptop", quantity: 1, price: 90000, rating: 4.5 },
    { id: 2, name: "Mouse", quantity: 2, price: 1200, rating: 4.2 },
    { id: 3, name: "Keyboard", quantity: 8, price: 4500, rating: 4.8 },
    { id: 4, name: "Monitor", quantity: 2, price: 35000, rating: 4.3 },
    { id: 5, name: "Headphones", quantity: 5, price: 3000, rating: 4.9 },
    { id: 6, name: "Webcam", quantity: 6, price: 6500, rating: 4.1 }
];

// equation : a - b => 4 - 2 = positive
// equation : b - a => 4 - 2 = negative


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