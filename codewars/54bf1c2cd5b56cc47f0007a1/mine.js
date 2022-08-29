function duplicateCount (text) {
  let arr = text.toLowerCase().split('');
  return [...new Set(arr)].reduce((count, curr) => {
    return arr.indexOf(curr) === arr.lastIndexOf(curr) ? count : count + 1;
  }, 0);
}