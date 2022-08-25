function squareDigits (num) {
  return Number(num.toString().split('').map(item => Math.pow(item, 2)).join(''));
}