function squareSum (numbers) {
  return numbers.reduce((sum, curr) => {
    return sum + Math.pow(curr, 2);
  }, 0);
}