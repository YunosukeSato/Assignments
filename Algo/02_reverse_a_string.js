// Reverse a string
// toy ---> yot
// ['t', 'o', 'y']

function reverse(str) {
  let revStr = str.split('').sort().reverse();
  return revStr.toString().replace(/,/g, '');
}