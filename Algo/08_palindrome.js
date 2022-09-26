/**
 * Given a string, return true if the string is a palindrome
 * or false if it is not.  Palindromes are strings that
 * form the same word if it is reversed. *Do* include spaces
 * and punctuation in determining if the string is a palindrome.
 * 
 */

const palindrome = (str) => {
  let newStr = str.split('').reverse().join('');
  if(str === newStr) {
    var result = true;
  }else{
    var result = false;
  }
  console.log(result);
}

palindrome("abbb");