export const add = (a = 0, b = 0) => {
  if (typeof a === 'string') a = Number(a);
  if (typeof b === 'string') b = Number(b);

  if (isNaN(a) || isNaN(b)) {
    throw new Error('One of the arguments is not a number');
  }

  return a + b;
};

export const subtract = (a, b) => {
  if (Array.isArray(a)) a = a.reduce((acc, val) => acc - val);
  if (Array.isArray(b)) b = b.reduce((acc, val) => acc - val);

  return a - b;
};

export const multiply = (a, b) => {
  const isInvalidNumber = (n) =>
    isNaN(n) || typeof n === 'boolean' || n === null;

  if (typeof a === 'string') a = Number(a);
  if (typeof b === 'string') b = Number(b);

  if (isInvalidNumber(a) || isInvalidNumber(b)) {
    throw new Error('One of the arguments is not a number');
  }

  return a * b;
};

export const divide = (a, b) => {
  if (b === 0) {
    return null;
  }
  return a / b;
};
