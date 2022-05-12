// Write a function `keepItQuiet` that accepts a string as an argument. The function should return the
// lowercase version of the string with 3 periods added to the end of it.

let keepItQuiet = function (str) {
    let LowerCase = str.toLowerCase();
    return LowerCase + "...";
};

console.log(keepItQuiet("HOORAY")); //hooray...
console.log(keepItQuiet("DOGGO")); //doggo...
console.log(keepItQuiet("WHAT?!?!")); //what?!?!...

//first try!