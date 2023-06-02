// MY TASK MANAGER - TERMINAL

// SETUP CODE
const fs = require('fs');
const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

//VARIABLES
let options = ["to see all your recipes", "to add a new recipe", "to delete a recipe", "to mark a recipe as done", "to Exit the recipe manager"]
let tasks = ["waffle", "crepes", "cookies"];
let done = [false, false, false];
let recipeDone
let choice;
let again = true
console.log("Welcome to your recipe manager! ")

//FUNCTIONS

//tells which option you choose
const optionChoice = (choice) => {
    return options[parseInt(choice)-1]
};

//shows which recipes have been declared as done
const showDone = () => {
    recipeDone = []
    for (i=0; i<tasks.length; i++) {
        if (done[i] == false) {
            recipeDone.push(tasks[i] + ": not done yet")
        } else {
            recipeDone.push(tasks[i] + ": already done")
        }
    }
    return recipeDone
}

//adds a new recipe
const addfunction = (addRecipe) => {
    tasks.push(addRecipe)
    done.push(false)
}

//deletes the recipe
const deletefunction = (deleteRecipe) => {
    if (parseInt(deleteRecipe) < (tasks.length+1)) {
        console.log(`\nYou have deleted the ${deleteRecipe}th recipe from your data, which is ${tasks[deleteRecipe-1]}.`)
        tasks.splice(deleteRecipe-1, 1);
        done.splice(deleteRecipe-1, 1);
        console.log(`\nYou now have ${tasks.length} recipes, which are ${tasks}`);
        console.log(showDone())
    } else {
        rl.setPrompt(`Your answer isn't valid, please enter a number between 1 and ${tasks.length}`);
        rl.prompt();
    }
}

//change a recipe as "already done"
const changefunction = (markAsDone) => {
    if (markAsDone<=done.length) {
        done[markAsDone-1] = true;
        console.log(`the recipe ${tasks[markAsDone-1]} has now been marked as done`)
        console.log(showDone())
    } else {
        console.log("invalid answer")
    }
}

//the terminal app
const terminal = () => {
rl.question("\nWhat do you want to do? \n 1. to see all your recipes \n 2. to add a new recipe \n 3. to delete a recipe \n 4. to mark a recipe as done \n 5. to Exit the recipe manager \n", (choice) => {
    choice = parseInt(choice)
    console.log('\nYour choice is: ' + optionChoice(choice))
        switch (choice) {
            case 1:
                console.log(`You have ${tasks.length} recipes, which are ${tasks}\n`);
                console.log(showDone())
                terminal()
                break;
            case 2:
                rl.setPrompt("Which recipe would you like to add?\n");
                rl.prompt();
                rl.removeAllListeners('line'); // remove the previous listener
                rl.on('line', (addRecipe) => {
                    addfunction(addRecipe)
                    console.log(`you have added the ${addRecipe} recipe, you now have ${tasks.length} recipes, which are ${tasks}`);
                    console.log(showDone())
                terminal()
                });
                break;

            case 3:
                console.log(`At the moment, you have ${tasks.length} recipes, which are ${tasks} \n`)
                console.log(showDone())
                rl.setPrompt(`Which recipe would you like to delete?\n`);
                rl.prompt();
                rl.removeAllListeners('line'); // remove the previous listener
                rl.on('line', (deleteRecipe) => { 
                    deletefunction(deleteRecipe)
                terminal()
                })
                break;
            case 4: 
                console.log(`At the moment, you have ${tasks.length} recipes, which are ${tasks} \n`)
                console.log(showDone())
                rl.setPrompt("Which recipe would you like to mark as done? Use the index\n");
                rl.prompt();
                rl.removeAllListeners('line'); // remove the previous listener
                rl.on('line', (markAsDone) => {
                    changefunction(markAsDone)
                    terminal()
                }
                );
                break;                
            case 5:
                rl.setPrompt("You will now leave the recipe manager. Press 'N' to stay, or any other key to proceed\n")
                rl.prompt();
                rl.removeAllListeners('line'); // remove the previous listener
                rl.on('line', (close) => {
                    if (close == "N") {
                    terminal(); // call the function again to start over
                    } else { 
                    rl.close(); // close the readline interface to exit the program
                    }              
                })
                break;
            default:
                console.log("Invalid answer, please try again")
                terminal()
                break;
        }
})}


if (again) {
    terminal(); // ask the question again if we should continue
  } else {
    rl.close(); // close the readline interface to exit the program
  }


