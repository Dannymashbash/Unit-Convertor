/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const feet = 3.281
const gallon = 0.264
const pound = 2.204
const paragraphs = document.querySelectorAll(".bottom p");

function conversion(unitA, unitB, unit) {
    const userInput = Number(document.getElementById("userInput").value)
    unit *= userInput
    return `${userInput} ${unitA} = ${unit.toFixed(3)} ${unitB} | ${unit.toFixed(3)} ${unitB} = ${userInput} ${unitA}`
}

function unitConversion() {

    paragraphs[0].textContent = conversion("meters", "feet", feet);
    paragraphs[1].textContent = conversion("liters", "gallon", gallon);
    paragraphs[2].textContent = conversion("kg", "pound", pound);
}

