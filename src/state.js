let currentValue = '0';
let previousValue = null;
let currentOperation = null;

export function getCurrentValue() {
  return currentValue;
}

export function setCurrentValue(value) {
  currentValue = value;
}

export function getPreviousValue() {
  return previousValue;
}

export function setPreviousValue(value) {
  previousValue = value;
}

export function getOperation() {
  return currentOperation;
}

export function setOperationValue(op) {
  currentOperation = op;
}

export function resetState() {
  currentValue = '0';
  previousValue = null;
  currentOperation = null;
}
