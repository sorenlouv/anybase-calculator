function isValid(expr) {
  return expr.match(/[^(\w\s+\-*/.())]/) === null;
}

function getNumberOfDecimals(value) {
  return (value.split('.')[1] || []).length;
}

function parseFloatWithRadix(value, radix) {
  const decimalCount = getNumberOfDecimals(value);
  const valueAsInteger = value.replace('.', '');
  return parseInt(valueAsInteger, radix) / Math.pow(radix, decimalCount);
}

export const isBaseValid = base => base >= 2 && base <= 36;

export const isExprValid = (expr, base) => {
  const matches = expr.match(/\d/g);
  if (!matches) {
    return true;
  }
  return !matches.some(number => parseInt(number, 10) >= parseInt(base, 10));
};

export function calc(expr, base) {
  if (!isValid(expr)) {
    throw new Error('Invalid expression: ' + expr);
  }

  const exprInBase10 = expr
    .replace(/\s/g, '') // remove whitespace
    .split(/([a-zA-Z0-9.]+)/g) // split numbers and operators
    .filter(number => number) // remove empty values
    .map(value => {
      const isOperator = ['+', '-', '*', '/'].includes(value);
      if (isOperator) {
        return value;
      }

      return parseFloatWithRadix(value, base);
    });

  // yeah, I use eval
  return eval(exprInBase10.join('')).toString(base); // eslint-disable-line
}
