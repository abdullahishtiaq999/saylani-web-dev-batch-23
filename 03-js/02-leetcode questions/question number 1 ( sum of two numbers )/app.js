const arr = [1, 23, 26, 34, 2, 4, 56, 78, 69, 54, 45, 7, 6];
const target = 30;

// storing 1 pair

function findNum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return -1;
};

const findSum = findNum(arr, target);

if (findSum === -1) {
    console.log("Number is Not Found")
} else {
    console.log(`Number Found at ${findSum[0]} and ${findSum[1]} indices`);
};

// storing multiple pairs

function findSum(arr, target) {
    let sums = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                sums.push([i, j]);
            };
        };
    };
    return sums.length ? sums : -1;
};

const findNum = findSum(arr, target);

if (findNum === -1) {
    console.log("Number is Not Found");
} else {
    let numberCounter = 0;
    for (let i = 0; i < findNum.length; i++) {
        numberCounter++;
        console.log(`${numberCounter} pair of numbers found at ${findNum[i][0]} and ${findNum[i][1]} indices`);
    };
};