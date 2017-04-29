function isValid(expr) {
  return expr.match(/[^(\w\s+\-*/.())]/) === null;
}

function parseFloatWithRadix(value, radix) {
  return parseInt(value * 100000, radix) / Math.pow(radix, 5);
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
    .split(/([0-9.]+)/g) // split numbers and operators
    .filter(number => number) // remove empty values
    .map(value => {
      const isNumber = !isNaN(value);
      if (isNumber) {
        return parseFloatWithRadix(value, base);
      }

      return value;
    });

  // yeah, I use eval
  return eval(exprInBase10.join('')).toString(base); // eslint-disable-line
}
