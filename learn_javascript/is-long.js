// Write a function `isLong` that accepts a string as an argument. The function should return a boolean
// indicating whether or not the string is longer than 5 characters

let isLong = function (str) {
    return str.length > 5;

}


console.log(isLong("blue")); //false
console.log(isLong("red")); //false
console.log(isLong("hop")); //false
console.log(isLong("Light")); //false
console.log(isLong("thermometer")); //true
console.log(isLong("Julia")); //false

//took a few