const prompt = require("prompt-sync")()

// let num1;
// let num2;
// while(true){
//     num1 = parseFloat(prompt("Enter number1: "))
//     if(isNaN(num1)){
//         console.log("Invalid input")
//     }else{
//         break;
//     }
// }
// while(true){
//     num2 = parseFloat(prompt("Enter number1: "))
//     if(isNaN(num2)){
//         console.log("Invalid input")
//     }else{
//         break;
//     }
// }

function getNumber(numberString){
    while(true){
        const number = parseFloat(prompt("enter number" + numberString + ":"))
        if(isNaN(number)){
            console.log("Invalid Input")
        }else{
            return number
        }
    }
}

const num1 = getNumber('One');
const num2 = getNumber('Two');

const operator = prompt("Enter sign: ")

let result;
let valid = true;

switch(operator){
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;  
        break;
    case "/":
        if(num2 === 0){
            valid =false;
            console.log("input again")
        }
        result = num1 / num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    default:
        console.log("invalid");
        valid = false;
        break;
}

if(valid){
    console.log(num1, operator, num2, "=",result)
}
