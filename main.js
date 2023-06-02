// MY TASK MANAGER - TERMINAL

// SETUP CODE
const fs = require('fs');
const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

//__________________FUNCTION CHOICE
let options = ["to see all your recipes", "to add a new recipe", "to delete a recipe", "to mark a recipe as done", "to Exit the recipe manager"]
const optionChoice = (choice) => {
    return options[parseInt(choice)-1]
};
//console.log(optionChoice(2))


/*
let waffle = {
    recipeName : 'Waffles',
    done : false
};
let crepes = {
    recipeName : 'Crepes',
    done : false
};
let cookies = {
    recipeName : 'Cookies',
    done : false
};
let tasks = [waffle, crepes, cookies];

console.log(tasks)

/*
let isDone = (reci) => {
    return reci.done
}*//*
const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];
  
  const result = tasks.find(({ recipeName }) => recipeName === "Waffles");
  
  console.log(result.done);
  
*/

//console.log(getName(waffle))
//console.log(`You have now ${tasks.length} recipes, which are ${tasks.recipeName}`)



/*
rl.setPrompt("Which recipe would you like to mark as done? Use the index\n");
rl.prompt();
rl.on('line', (markAsDone) => {
    if (markAsDone<done.length) {
        done[markAsDone-1] = true;
        console.log(`the recipe ${tasks[markAsDone-1]} has now been marked as done`)
    } else {
        console.log("invalid answer")
    } 
    

    
    //console.log(`you have added the ${addRecipe} recipe, you now have ${tasks.length} recipes, which are ${tasks}`);
    rl.close();
    });
*/
/*
for (i=0; i<tasksDone-1; i++) {
    if (done[i] == true) {
        tasksNotDone.splice(i, 1)
    }
}
*/
//console.log(`At the moment, the recipes that are `)




/*const showtasks = () => {
    console.log(tasks)
}

showtasks()*/

/*
rl.question('Enter a number', (num) => {
    switch (parseInt(num)) {
        case 1:
            console.log(`Hello ${num}`);
            break;
        case 2:
            console.log(`Hello ${num} twice`);
            break;
}
rl.close();
}
);*/


  /*
rl.on('line', (num) => {
    
});*/



    
//parseInt(deleteRecipe) >= (tasks.length+1) || parseInt(deleteRecipe) < 0 
    /*if (tasks.includes(deleteRecipe)) { //if I have the time, add here a possibility to delete by name
        delete tasks(indexOf(deleteRecipe))
        } else {
            rl.setPrompt(`Sorry, '${deleteRecipe}' hasn't been found in your list.\nWhich recipe would you like to delete?`)
            rl.prompt();
        }
	console.log(`you have delered the ${deleteRecipe} recipe from your data, you now have ${tasks.length} recipes, which are ${tasks}`);
	rl.close();*/



//EXEMPLE 

/*
let shouldContinue = true;


function askQuestion() {
rl.question("Welcome to your recipe manager! What do you want to do today? \n 1. to see all your recipes \n 2. to add a new recipe \n 3. to delete a recipe \n 4. to mark a recipe as done \n 5. to Exit the recipe manager \n", (choice) => {
        switch (choice.trim()) {
      case "start":
        console.log("Starting...");
        break;
      case "stop":
        console.log("Stopping...");
        shouldContinue = false; // set the boolean variable to false to stop the loop
        rl.close(); // close the readline interface to exit the program
        break;
      default:
        console.log("Unknown command.");
        break;
    }

    if (shouldContinue) {
      askQuestion(); // ask the question again if we should continue
    } else {
      rl.close(); // close the readline interface to exit the program
    }
  });
}

askQuestion();

*/


let tasks = ["waffle", "crepes", "cookies"];
let done = [false, false, false];
let recipeDone

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


let choice;

let again = true
console.log("Welcome to your recipe manager! ")




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
                    tasks.push(addRecipe)
                    done.push(false)
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
                    if (markAsDone<=done.length) {
                        done[markAsDone-1] = true;
                        console.log(`the recipe ${tasks[markAsDone-1]} has now been marked as done`)
                        console.log(showDone())
                    } else {
                        console.log("invalid answer")
                    }
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


