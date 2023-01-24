function findMissingNumber(array) {
  let number = 1;
  for (const element of array) {
    if (element != number) {
      return element;
    }
    number++;
  }
  return "We don't miss anything!";
}

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(findMissingNumber(testArray));
