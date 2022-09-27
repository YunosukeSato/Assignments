function binarySearch(arr, key) {
  let leftPoint = 0;
  let rightPoint = arr.length - 1;
  while (leftPoint <= rightPoint) {
    let mid = Math.floor((leftPoint + rightPoint) / 2);
    let element = arr[mid];
    if (element < key) {
      leftPoint = mid + 1;
    } else if (element > key) {
      rightPoint = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 5));
