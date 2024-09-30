// Q1
let input = prompt("Enter a number: ");

let number = parseFloat(input);

if(isNaN(number)){
    console.log("Please enter a number. ")
}else{
    if(number%5 === 0){
        console.log(number + " is a multiple of 5. ")
    }else{
        console.log(number + " is not a multiple of 5. ")
    }
}

// Q2
let score = prompt("Enter the student's score:");

let numericScore = parseFloat(score);

if (isNaN(numericScore) || numericScore < 0 || numericScore > 100) {
    console.log("Please enter a valid score between 0 and 100.");
} else {
    let grade;
    if (numericScore >= 80 && numericScore <= 100) {
        grade = 'A';
    } else if (numericScore >= 70 && numericScore < 80) {
        grade = 'B';
    } else if (numericScore >= 60 && numericScore < 70) {
        grade = 'C';
    } else if (numericScore >= 50 && numericScore < 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    console.log("The student's grade is: " + grade);
}

// Calculator Challenge
function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return "Error: Cannot divide by zero.";
            }
            result = num1 / num2;
            break;
        default:
            return "Error: Invalid operator. Please use '+', '-', '*', or '/'.";
    }

    return result;
}

// FizzBuzz Challenge
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
