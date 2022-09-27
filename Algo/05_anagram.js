// 'hello' --> 'olleh' is an anagram
// 'hello' --> 'lloh' is not an anagram

const anagram = (str1, str2) => {
  if (sortStr(str1) === sortStr(str2)) {
    return true;
  } else {
    return false;
  }
};

const sortStr = (str) => {
  return str.replace(/[¥w]/g).toLowerCase().split('').sort().join('');
};

console.log(anagram('dog', 'dog'));
