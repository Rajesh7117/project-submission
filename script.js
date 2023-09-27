let currentInput = '';
let calculationHistory = [];

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        if (!isNaN(result)) {
            calculationHistory.unshift(currentInput + ' = ' + result);
            if (calculationHistory.length > 10) {
                calculationHistory.pop();
            }
            updateHistory();
            currentInput = String(result);
            document.getElementById('display').value = result;
        } else {
            throw new Error('Invalid Input');
        }
    } catch (error) {
        alert('Error: ' + error.message);
        clearDisplay();
    }
}

function updateHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    calculationHistory.forEach((calculation) => {
        const listItem = document.createElement('li');
        listItem.textContent = calculation;
        historyList.appendChild(listItem);
    });
}
