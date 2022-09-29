function removeDupes(str) {
  return Array.from(new Set(str)).join('');
}