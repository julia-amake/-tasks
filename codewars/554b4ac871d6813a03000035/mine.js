// https://www.codewars.com/kata/554b4ac871d6813a03000035/solutions/javascript

function highAndLow (numbers) {
  const arr = numbers.split(' ').sort((a, b) => {
    return b - a;
  });
  return `${ arr[0] } ${ arr[arr.length - 1] }`;
}
