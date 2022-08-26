function positiveSum (arr) {
  return arr.reduce((sum, curr) => {
    return curr > 0 ? sum + curr : sum;
  }, 0);
}