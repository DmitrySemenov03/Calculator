import {
  appendNumber,
  calculate,
  changeSign,
  clearAll,
  getPercent,
  setOperation,
} from './actions';
import { getCurrentValue } from './state';

export function createCalculateUI() {
  const container = document.querySelector('.container');
  const calculator = document.createElement('div');
  calculator.classList.add('calculator');
  container.appendChild(calculator);

  const display = document.createElement('input');
  display.value = getCurrentValue();
  display.readOnly = true;
  display.id = 'calc-display';
  display.classList.add('calcDisplay');
  calculator.appendChild(display);

  function updateDisplay() {
    display.value = getCurrentValue();
  }

  function makeButton(text, onClick, className = '') {
    const btn = document.createElement('button');
    btn.textContent = text;
    btn.className = `btn ${className}`;
    btn.onclick = () => {
      onClick();
      updateDisplay();
    };
    calculator.appendChild(btn);
  }

  // Buttons create
  makeButton('C', clearAll, 'btn-action');
  makeButton('+/-', changeSign, 'btn-action');
  makeButton('%', getPercent, 'btn-action');
  makeButton('/', () => setOperation('/'), 'btn-sign');
  ['7', '8', '9'].forEach((n) => makeButton(n, () => appendNumber(n)));
  makeButton('×', () => setOperation('*'), 'btn-sign');
  ['4', '5', '6'].forEach((n) => makeButton(n, () => appendNumber(n)));
  makeButton('-', () => setOperation('-'), 'btn-sign');
  ['1', '2', '3'].forEach((n) => makeButton(n, () => appendNumber(n)));
  makeButton('+', () => setOperation('+'), 'btn-sign');

  makeButton('0', () => appendNumber('0'), 'btn-zero');
  makeButton('.', () => appendNumber('.'));
  makeButton('=', calculate, 'btn-sign');
}
