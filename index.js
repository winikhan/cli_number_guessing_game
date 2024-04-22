#! /usr/bin/env node
import inquirer from "inquirer";
console.log(`Welcome to the the "CLI Number Guessing Game" by Waniza Khan`);
// 1) Computer will generate a  random number
// 2) User input for guessing number
const random_number = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number: ",
    },
]);
if (answer.userGuessedNumber === random_number) {
    console.log("Congratulations! you guessed correct number. ");
}
else {
    console.log("You guessed wrong number.");
}
