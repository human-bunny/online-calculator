let runningTotal = 0;
let buffer = "0";
let previousOperator;
let expression;
const history = [];
let indexHistory;
let isHistory = false;
let memory = 0;

const screen = document.querySelector(".screen");

function buttonClick(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  isHistory
    ? (screen.innerText = history[indexHistory])
    : (screen.innerText = buffer);
  // console.log(runningTotal);
  // console.log(`expression: ${expression}`);
  // console.log(`history: ${history}`);
}

function handleSymbol(symbol) {
  switch (symbol) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      break;
    case "CE":
      buffer = "0";
      break;
    case "=":
      if (previousOperator === null) {
        return;
      }
      flushOperation(parseFloat(buffer));
      previousOperator = null;
      handleHistory(symbol);
      runningTotal = 0;
      break;
    case "←":
      if ((buffer[0] === "-" && buffer.length === 2) || buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case ".":
      handleNumber(".");
      break;
    case "+/−":
      handleSign();
      break;
    case "History":
    case "↑":
    case "↓":
      handleHistory(symbol);
      break;
    case "MC":
    case "MR":
    case "M+":
    case "M−":
      handleMemory(symbol);
      break;
    case "+":
    case "−":
    case "×":
    case "÷":
      handleMath(symbol);
      break;
  }
}

function handleMath(symbol) {
  if (buffer === "0") {
    return;
  }

  const floatBuffer = parseFloat(buffer);

  if (runningTotal === 0) {
    runningTotal = floatBuffer;
    expression = String(floatBuffer) + String(symbol);
  } else {
    flushOperation(floatBuffer);
    expression = expression + String(floatBuffer) + String(symbol);
  }
  previousOperator = symbol;
  buffer = "0";
}

function flushOperation(floatBuffer) {
  if (previousOperator === "+") {
    runningTotal += floatBuffer;
  } else if (previousOperator === "−") {
    runningTotal -= floatBuffer;
  } else if (previousOperator === "×") {
    runningTotal *= floatBuffer;
  } else if (previousOperator === "÷") {
    runningTotal /= floatBuffer;
  }
}

function handleNumber(numberString) {
  /*Update buffer with number input as a string*/
  if (buffer === "0") {
    buffer = numberString;
  } else if (buffer === "-0") {
    buffer = "-" + numberString;
  } else {
    buffer += numberString;
  }
}

function handleSign() {
  if (buffer[0] !== "-") {
    buffer = "-" + buffer;
  } else {
    buffer = buffer.slice(1);
  }
}

function handleHistory(button) {
  if (button === "History") {
    if (isHistory) {
      screen.innerText = buffer;
      isHistory = false;
    } else {
      indexHistory = 0;
      screen.innerText = history[indexHistory];
      isHistory = true;
    }
  } else if (button === "↑") {
    if (indexHistory < history.length - 1) {
      indexHistory++;
    }
  } else if (button === "↓") {
    if (indexHistory > 0) {
      indexHistory--;
    }
  } else if (button === "=") {
    expression = expression + buffer;
    buffer = String(runningTotal);
    expression = expression + "=" + buffer;
    history.unshift(expression);
    expression = null;
  }
}

function handleMemory(button) {
  if (button === "MC") {
    memory = 0;
  } else if (button === "MR") {
    buffer = memory.toString();
  } else if (button == "M+") {
    memory += parseFloat(buffer);
  } else if (button == "M−") {
    memory -= parseFloat(buffer);
  }
  // console.log(`memory: ${memory}`);
}

function init() {
  document
    .querySelector(".calc-buttons")
    .addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    });
}

init();
