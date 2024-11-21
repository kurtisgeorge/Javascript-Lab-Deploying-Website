/****************** YOUR NAME: Kurtis George

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// Variables to track the selected model and duration
let modelName = "XYZ";
let duration = 0;

/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element.
    - check the value of the modelName variable, and use that to calculate the new total cost:
    - set the value of the calculated-cost element's innerHTML to this new value
*/

function recalculate() {
    // Get the span element for the calculated cost
    let costLabel = document.getElementById("calculated-cost");

    // Calculate the total cost based on modelName
    let totalCost = 0;
    if (modelName === "XYZ") {
        totalCost = duration * 100; // $100 per day for model XYZ
    } else if (modelName === "CPRG") {
        totalCost = duration * 213; // $213 per day for model CPRG
    }

    // Update the innerHTML of the calculated-cost element
    costLabel.innerHTML = totalCost.toFixed(2); // Display with 2 decimal places
}

/****************** model button logic ******************/
/* 
- Create a variable to represent the "Switch Model" pseudo-button
- Create a function called changeModel() to switch between models
*/

let modelButton = document.getElementById("model-button");

function changeModel() {
    // Get the span element for model text
    let modelText = document.getElementById("model-text");

    // Switch between models and update the innerHTML
    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    } else {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }

    // Recalculate the total cost
    recalculate();
}

// Attach event listener to the model button
modelButton.addEventListener("click", changeModel);

/****************** duration button logic ******************/
/*  - Create a variable to represent the "Change Duration" pseudo-button.
    - Create a function called changeDuration() to update the duration
*/

let durationButton = document.getElementById("duration-button");

function changeDuration() {
    // Get the span element for duration text
    let durationText = document.getElementById("duration-text");

    // Prompt the user for a new duration
    let newDuration = prompt("Enter the number of days for rental:");

    // Ensure the value is valid
    if (!isNaN(newDuration) && newDuration >= 0) {
        // Update the duration variable and the innerHTML
        duration = parseInt(newDuration);
        durationText.innerHTML = duration;

        // Recalculate the total cost
        recalculate();
    } else {
        alert("Please enter a valid number of days.");
    }
}

// Attach event listener to the duration button
durationButton.addEventListener("click", changeDuration);