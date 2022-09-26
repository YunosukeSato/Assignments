/**
 * The difference between two elements in an array can mean a delta.
 * Find the sum of all deltas in an array.
 *
 * Example [50,32] --> the difference between 50 and 32 is 18
 */

const sumDelta = (arr) => {
  let delta = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    delta = delta + Math.abs(arr[i] - arr[i + 1]);
  }
  console.log(delta);
};
