// if 
// if  else
// if else if else

if(true) {
    console.log("code in if block will execute when true")
}



if(false) {
    console.log("if false code will not execute")
} else {
    console.log("code in else is going to execute when if is false")
}

if( 3 > 6) {
    console.log("only execute when true if")
} else if(6 > 7) {
    console.log("code will execute when its  true else if")
} else {
    console.log("if both is false then else  code will execute")
}

if (true) {
    console.log("foo");
  }

  if (false) {
    console.log("bar");
  }

  if (true) {
      console.log("I will succeed");
  }

  if (false) {
      console.log("If I fail I will try again");
  }

//HW: Finish strength and conditioning excercise


  //Program to check if a number is prime or not

  //take input from the user
  const number = parseInt(prompt("Enter a positive number: "));
  let isPrime = true;

  //check if number is equal to 1
  if (number === 1) {
      console.log("1 is neither prime nor composite number.")
  
    }

    //check if number is greater than 1
    else if (number > 1) {

        //looping through 2 to number-1
        for (let i = 2; i < number; i++) {
            if (number % i== 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is not a prime number`);
    }

//check if number is less than 1
else {
    console.log("The number is not a prime number. Get good.");
}  