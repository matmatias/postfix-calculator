exports.calculate = function (expression) {
  const tokens = expression.split(" ");
  const operandsQueue = [];
  const operatorsStack = [];

  for (let token of tokens) {
    if (!isNaN(token)) {
      operandsQueue.push(parseFloat(token));
    }
    if (isOperator(token)) {
      operatorsStack.push(token);
    }
  }

  while (operandsQueue.length > 1 && operatorsStack.length > 0) {
    const operator = operatorsStack.pop();

    const operand2 = operandsQueue.shift();
    const operand1 = operandsQueue.shift();
    const result = applyOperator(operand1, operand2, operator);

    operandsQueue.push(result);
  }

  if (operandsQueue.length === 1) {
    return operandsQueue[0];
  }

  return 0;
};

function isOperator(token) {
  if (token === "+" || token === "-" || token === "/" || token === "*") {
    return true;
  }

  return false;
}

function applyOperator(operand1, operand2, operator) {
  switch (operator) {
    case "+":
      operand1 + operand2;
    case "-":
      operand1 - operand2;
    case "*":
      operand1 * operand2;
    case "/":
      operand1 / operand2;
  }
}
