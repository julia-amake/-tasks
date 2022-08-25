function highAndLow (numbers) {
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

function highAndLow (numbers) {
  numbers = numbers.split(' ');
  return `${ Math.max(...numbers) } ${ Math.min(...numbers) }`;
}