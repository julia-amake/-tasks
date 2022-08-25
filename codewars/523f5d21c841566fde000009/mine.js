// https://www.codewars.com/kata/523f5d21c841566fde000009
function arrayDiff (a, b) {
  return a.reduce((arr, curr) => {
    b.indexOf(curr) === -1 && arr.push(curr);
    return arr;
  }, []);
}