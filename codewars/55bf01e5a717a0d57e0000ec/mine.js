function persistence (num) {
  let count = 0;

  return (function multiply (num) {
    if (num < 10) return count;

    count++;
    const arr = num.toString().split('');

    return multiply(arr.slice(1).reduce((m, c, i) => m * c, arr[0]));
  })(num);
}