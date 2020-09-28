// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]

const arrayShuffle = (array) => {
    //is array empty?
    if (array.length === 0){
        return "The array is empty"
    }
    else {
        //shift array
        array.shift()
        //shuffle array
        for (let i = array.length - 1; i > 0; i--) {
            array.sort(() => Math.random() - 0.5);
        }
    }
    return array
}
// console.log(arrayShuffle(collections));

// let arrayShuffle = function(arr) {
//   let newPos;
//
//   for (let i = array.length - 1; i > 0; i--) {
//     newPos = Math.floor(Math.random() * (i + 1));
//       temp = arr[i];
//       arr[i] = arr[newPos];
//       arr[newPos] = temp;
//   }
//   return arr;
// }
// let newArray = arrayShuffle(array);
//
// console.log(newArray);
//
//


// let removeEl = collections.shift()=>{
//   array.shuffle()
//   return removeEl
// }
// console.log(removeEl);



// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

const cubed = (array) => {
    //create empty sum to add onto
    let sum = 0
    let cubedArray = array.map(value => {
        return value ** 3
    })
    cubedArray.map(value => {
        sum += value
    })
    return sum
}
// console.log(cubed(cubeAndSum1));


// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

const minAndMaxFinder = (array) => {
    let minMaxArray = []
    //using Math.min and spread operator to push min and max into array
      minMaxArray.push(Math.min(...array))
      minMaxArray.push(Math.max(...array))
    return minMaxArray
}
// console.log(minAndMaxFinder(nums1));

// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"

const capitalizer = (string) => {
    //create array of letters
    let arrOfLetters = string.split("")
    let newArray = arrOfLetters.map((letter, index) => {
            //if/else conditional
        if (index % 2 === 0){
            return letter.toLowerCase()
        }
        else {
            return letter.toUpperCase()
        }
    })
    return newArray.join("")
}

// console.log(capitalizer(testString1));



// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]


//create a function that takes in two arrays
const sumArr = (array1, array2) => {
    sumOfArrays = []
    //map through each value of final array
    array1.map(value =>{
        if (sumOfArrays.includes(value) === false){
            sumOfArrays.push(value)
        }
    })
    array2.map(value =>{
        if (array1.includes(value) === false){
            sumOfArrays.push(value)
        }
    })
    //return the array with no duplicate values
    return sumOfArrays
}
// console.log(sumArr(arr1));
