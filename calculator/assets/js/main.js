class Calculator {
    constructor() {
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = '';
        this.result = null;
        this.updateDisplay();
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand += number.toString();
        this.updateDisplay();
    }

    addDecimal() {
        if (this.currentOperand.includes('.')) return;
        this.currentOperand += '.';
        this.updateDisplay();
    }

    setOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.calculate();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
        this.updateDisplay();
    }

    calculate() {
        let result;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }

        this.result = result;
        this.currentOperand = result.toString();
        this.operation = '';
        this.previousOperand = '';
        this.updateDisplay();
    }

    updateDisplay() {
        const display = document.getElementById('display');
        display.value = `${this.previousOperand} ${this.operation} ${this.currentOperand}`;
    }
}

const calculator = new Calculator();