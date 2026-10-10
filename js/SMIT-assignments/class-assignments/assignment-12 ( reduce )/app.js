const colors = ["red", "orange", "blue", "orange", "black", "white", "red", "black" , "black" , "purple"]
// const result = {}

// for (let i = 0; i < colors.length; i++) {

//     if (!result[colors[i]]) {
//         result[colors[i]] = 1
//     } else {
//         result[colors[i]] = result[colors[i]] + 1
//     }
// }

// console.log(result)

const result = colors.reduce((acc , curr) => {
    if(acc[curr]) {
        acc[curr] = 1
    } else {

    }
} , {})