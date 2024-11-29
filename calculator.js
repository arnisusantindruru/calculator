function clearDisplay() {
  document.getElementById("display").value = "";
}

function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function calculate() {
  let display = document.getElementById("display");
  try {
    // Safely evaluate the expression
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}

function backspace() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function toggleParentheses() {
  let display = document.getElementById("display");
  let currentDisplay = display.value;

  // Check the number of opening and closing parentheses
  let openCount = (currentDisplay.match(/\(/g) || []).length;
  let closeCount = (currentDisplay.match(/\)/g) || []).length;

  // If there are more opening parentheses, add a closing one, otherwise add an opening one
  if (openCount > closeCount) {
    display.value += ")";
  } else {
    display.value += "(";
  }
}
