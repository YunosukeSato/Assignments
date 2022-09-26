/**
 * Write a function that accepts a string.  The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 */

const capitalize = (str) => {
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  let capWrords = words.join(' ');
  console.log(capWrords);
};