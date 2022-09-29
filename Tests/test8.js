let result = ' x   ';

function space(val) {
  let space = '';
  let pad = 4 - val;
  while (pad-- > 0) space += ' ';
  return space;
}

for (let i = 0; i < 11; i++) {
  for (let j = 0; j < 11; j++) {
    if (i == 0 && j > 0) {
      result += '[' + j + ']' + space((j + '').length + 2);
    } else if (j == 0 && i > 0) {
      result += '[' + i + ']';
    } else if (i > 0 && j > 0) {
      result += space((i * j + '').length) + i * j;
    }
  }
  result += '\n';
}

console.log(result);
