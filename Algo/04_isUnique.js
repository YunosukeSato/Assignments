// Determine whether all characters in a string are unique or not
// Make it case-sensitive, meaning a string with both 'a' and 'A'
// could pass the test

const makeStr = (str) => {
  let newStr = Array.from(new Set(str)).join('');
  if (str.length == newStr.length) {
    var result = true;
    console.log(result);
  } else {
    var result = false;
    console.log(result);
  }
};
