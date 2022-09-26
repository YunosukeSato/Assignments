// multiple of 3, print "fizz"
// multiple of 5, print "buzz"
// multiple of 3 and 5, print "fizzbuzz"

const fizzbuzz = (num) => console.log((num % 3 ? '' : 'fizz') + (num % 5 ?  '' : 'buzz') || num);