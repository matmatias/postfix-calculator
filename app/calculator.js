exports.calculate = function (expression) {
  const tokens = expression.split(" ");
  const stack = [];

  for (let token of tokens) {
    stack.push(token);

    if (stack.length >= 3) {
      while (
        !isNaN(stack.at(-1)) &&
        !isNaN(stack.at(-2)) &&
        isOperator(stack.at(-3))
      ) {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        const operator = stack.pop();

        const result = applyOperator(
          parseInt(operand1),
          parseInt(operand2),
          operator
        );

        stack.push(result);
      }
    }
  }

  return stack[0];
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
      return operand1 + operand2;
    case "-":
      return operand1 - operand2;
    case "*":
      return operand1 * operand2;
    case "/":
      return operand1 / operand2;
  }
}
