function calculation(array) {
  if (array.length === 1) return array;
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  let result = calc(calculation(left), calculation(right));
  return result;
}

function calc(left, right) {
  return left * right;
}
