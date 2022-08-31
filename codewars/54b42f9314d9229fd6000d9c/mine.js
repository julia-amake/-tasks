function duplicateEncode (word) {
  word = word.toLowerCase();
  return word.split('').map(item => {
    return word.indexOf(item) === word.lastIndexOf(item) ? '(' : ')';
  }).join('');
}