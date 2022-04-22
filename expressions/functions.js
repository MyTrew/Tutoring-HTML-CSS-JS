function FullName() {
    let firstName = "John";
    let lastName = "Doe"
    console.log(firstName + " " + lastName );
}


FullName();
FullName();

// snippet 0-1
let greet = function () {
    console.log("hey");
    console.log("programmers");
  };
  

  greet()

  console.log("last line of my code");

  console.log("first"); //first
  console.log("second"); //second
  greet(); //hey programmers
  console.log("third"); //third
  console.log("fourth"); //fourth
  
  let whistle = function () {
      console.log("wooo");
  }

whistle();
