const prompt = require("prompt-sync")();

console.log("Welcome to the Quiz")

let correct_answers = 0;
const totalQuestions = 3;

const answer1 = prompt("What is the brain of the computer ?");
const correct_answer1 = "CPU";

if ( answer1.toUpperCase() === correct_answer1){
    console.log("You got it correct!");
    correct_answers++;
} else {
    console.log("you wrong ...");
}

const answer2 = prompt("What is the better a 3090ti or 4060 ??");
const correct_answer2 = "3090ti";

if ( answer2.toLowerCase() === correct_answer2){
    console.log("You got it correct!");
    correct_answers++;
} else {
    console.log("you wrong ...");
}

const answer3 = prompt("What is the reccomend amount of RAM in 2023 ??");
const correct_answer3 = "16GB";

if ( answer3.toUpperCase() === correct_answer3){
    console.log("You got it correct!");
    correct_answers++;
} else {
    console.log("you wrong ...");
}

console.log("You got", correct_answers, "questions correct")
console.log("You score", (Math.round((correct_answers / totalQuestions) * 100).toString()), "%")
