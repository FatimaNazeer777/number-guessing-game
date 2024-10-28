#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 +1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 to 10: ",
},
]);

if(answers.userGuessedNumber === randomNumber){
    console.log("Congratulations, you guessed a correct number.");
} else{
    console.log("Sorry, you guessed a wrong number");
}