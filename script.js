// Selecting DOM elements
const input = document.getElementById("input");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");
const decimalButton = document.getElementById("decimal");
const numberButtons = document.querySelectorAll(".number");

// Variables to store current and previous values
let currentVal = "";
let prevVal = "";
let operator = null;
let result = null;

// Function to update the input field
function updateInput(val) {
  if (val === ".") {
    // Check for decimal point
    if (currentVal.includes(".")) {
      return;
    }
  }
  currentVal += val;
  input.value = currentVal;
}

// Function to handle operator button clicks
function handleOperator(op) {
  if (currentVal === "") {
    return;
  }
  if (prevVal !== "") {
    calculate();
  }
  operator = op;
  prevVal = currentVal;
  currentVal = "";
}

// Function to perform the calculation
function calculate() {
  let x = parseFloat(prevVal);
  let y = parseFloat(currentVal);
  switch (operator) {
    case "+":
      result = x + y;
      break;
    case "-":
      result = x - y;
      break;
    case "*":
      result = x * y;
      break;
    case "/":
      result = x / y;
      break;
    default:
      return;
  }
  currentVal = result.toString();
  input.value = currentVal;
  prevVal = "";
  result = null;
}

// Function to clear the input field
function clearInput() {
  currentVal = "";
  prevVal = "";
  operator = null;
  result = null;
  input.value = "";
}

// Adding event listeners to buttons
addButton.addEventListener("click", () => handleOperator("+"));
subtractButton.addEventListener("click", () => handleOperator("-"));
multiplyButton.addEventListener("click", () => handleOperator("*"));
divideButton.addEventListener("click", () => handleOperator("/"));
equalsButton.addEventListener("click", calculate);
clearButton.addEventListener("click", clearInput);
decimalButton.addEventListener("click", () => updateInput("."));
numberButtons.forEach((button) => {
  button.addEventListener("click", () => updateInput(button.textContent));
});
