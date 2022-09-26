/**
 * Create a function which returns the number of true values 
 * there are in an array.
 * 
 * Return 0 if given an empty array.
 * All array items are of the type boolean (true or false)
 */

const countTrue = (arr) => {
  let counter = 0;
  arr.forEach(value => {
    if(value == true) {
      counter++;
    }
  });
  console.log(counter);
}