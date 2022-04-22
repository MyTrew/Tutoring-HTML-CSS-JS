let word = "suspension bridge";
console.log(word[4]); //?
console.log(word.length > 5 && word[0] === "d"); //13
console.log(word.length > 5 && word[0] === "s"); //true
console.log(word.indexOf("o") > -1); //true
console.log(word.indexOf("z") > -1); //false

let str = "foggy";
console.log(str[2 + 1]); //g
console.log(str[str.length - 1]); //y
str = " day"; // day
console.log(str); // day
console.log(str.length); //4
console.log(str.indexOf("ogg")); //-1

//Dare to decipher

let phrase = "that's all folks";
console.log(phrase[phrase.length]); //undefined
console.log(phrase[phrase.length - 1]); //s
console.log(phrase[phrase.length - 2]); //k

const i = 9; //i = 9
const char = phrase[i]; // l
console.log(char) // l
console.log(phrase.indexOf(char)); //8
console.log(phrase.slice(2,8)); //at's at
console.log("abcdefg".slice(2)); //cdefg
console.log("abcdefg".slice(4)); //efg
console.log("abcdefg".slice(2, -1)); //cdef
console.log("abcdefg".slice(2, -2)); //cde