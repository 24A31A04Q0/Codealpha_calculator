const display = document.getElementById('display');

// Append numbers or operators to the screen
function appendValue(val) {
    if (display.value === '0') {
        display.value = val;
    } else {
        display.value += val;
    }
}

// Clear the entire display screen
function clearDisplay() {
    display.value = '';
}

// Calculate the final math result safely
function calculateResult() {
    try {
        // Evaluate the string expression on the screen
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// BONUS: Keyboard Support
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Check if the key pressed is a number or decimal
    if ((key >= '0' && key <= '9') || key === '.') {
        appendValue(key);
    }
    // Check for operators
    else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendValue(key);
    }
    // Enter key or Equals key triggers the math calculation
    else if (key === 'Enter' || key === '=') {
        event.preventDefault(); // Prevents page reload on enter
        calculateResult();
    }
    // Escape key or 'c' / 'C' clears the screen
    else if (key === 'Escape' || key.toLowerCase() === 'c') {
        clearDisplay();
    }
    // Backspace deletes the last character
    else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    }
});