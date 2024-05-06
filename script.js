let displayValue = ''; // Initialize a variable to store the current value displayed on the calculator

function appendToDisplay(value) {
  displayValue += value; // Concatenate the input 'value' to the current display value
  document.getElementById('text-display').value = displayValue; // Update the displayed value on the calculator
}

function clearDisplay() {
  displayValue = ''; // Clear the display value by setting it to an empty string
  document.getElementById('text-display').value = ''; // Clear the displayed value on the calculator
}

function calculate() {
  const result = eval(displayValue); // Evaluate the mathematical expression in the display value
  if (!isNaN(result)) {
    displayValue = result.toString(); // Convert the result to a string and update the display value
    document.getElementById('text-display').value = displayValue; // Update the displayed value on the calculator
  } else {
    displayValue = ''; // Reset the display value to an empty string
    document.getElementById('text-display').value = 'Error'; // Display 'Error' on the calculator if the calculation is invalid
  }
}

function toggleNegative() {
  if (displayValue.startsWith('-')) {
    displayValue = displayValue.substring(1); // Remove the negative sign from the beginning of the number
  } else {
    displayValue = '-' + displayValue; // Add a negative sign to the beginning of the number
  }
  document.getElementById('text-display').value = displayValue; // Update the displayed value on the calculator
}

function calculatePercentage() {
  const percentageValue = parseFloat(displayValue) / 100; // Calculate the percentage of the current number
  displayValue = percentageValue.toString(); // Convert the percentage value to a string
  document.getElementById('text-display').value = displayValue; // Update the displayed value on the calculator
}
