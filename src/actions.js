import {
  getCurrentValue,
  setCurrentValue,
  getPreviousValue,
  setPreviousValue,
  getOperation,
  setOperationValue,
  resetState,
} from './state.js';

//manual math functions
function plus(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) return 0;
  return a / b;
}

// calculation logic
export function appendNumber(n) {
  let value = getCurrentValue();

  if (value === '0' && n !== '.') {
    value = '';
  }
  if (n === '.' && value.includes('.')) return;

  setCurrentValue(value + n);
}

export function setOperation(op) {
  const currentOp = getOperation();

  if (currentOp !== null) {
    calculate();
  }

  setPreviousValue(parseFloat(getCurrentValue()));
  setOperationValue(op);
  setCurrentValue('0');
}

export function calculate() {
  const op = getOperation();
  const prev = getPreviousValue();

  if (op === null || prev === null) return;

  const a = prev;
  const b = parseFloat(getCurrentValue());
  let result;

  switch (op) {
    case '+':
      result = plus(a, b);
      break;
    case '-':
      result = minus(a, b);
      break;
    case '*':
      result = multiply(a, b);
      break;
    case '/':
      result = divide(a, b);
      break;
  }

  setCurrentValue(String(result));
  setOperationValue(null);
  setPreviousValue(null);
}

export function changeSign() {
  const value = getCurrentValue();
  if (value === '0') return;

  setCurrentValue(value.startsWith('-') ? value.slice(1) : '-' + value);
}

export function getPercent() {
  const value = parseFloat(getCurrentValue());
  setCurrentValue(String(value / 100));
}

export function clearAll() {
  resetState();
}
