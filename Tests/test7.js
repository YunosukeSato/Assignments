function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function countPrimes(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
}
