//snippet 0-4
let exclaim = function (str) {
    let capitalized = str.toUpperCase();
    return capitalized + "!!";
};

let result = exclaim("potato");
console.log(result); //Potato!!
console.log(result.length); //8
console.log(result[0]); //P
console.log(result[result.length - 1]); //!