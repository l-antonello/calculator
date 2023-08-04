let currentExpression = "";
const displayElement = document.getElementById("display");

function appendNumber(number) {
  currentExpression += number;
  updateDisplay();
}

function appendOperator(operator) {
  currentExpression += operator;
  updateDisplay();
}

function appendDecimal() {
  if (!currentExpression.includes(".")) {
    currentExpression += ".";
    updateDisplay();
  }
}

function clearDisplay() {
  currentExpression = "";
  updateDisplay();
}

function deleteLast() {
  currentExpression = currentExpression.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(currentExpression);
    currentExpression = result.toString();
    updateDisplay();
  } catch (error) {
    displayElement.innerText = "Error";
  }
}

function updateDisplay() {
  displayElement.innerText = currentExpression || "0";
}
