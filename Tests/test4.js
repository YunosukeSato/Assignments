function reverse(chrs) {
  if (chrs === '') return '';
  return reverse(chrs.slice(1)) + chrs.charAt(0);
}
