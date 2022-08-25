function digitalRoot (n) {
  n = n.toString().split('');

  if (n.length === 1) return +n[0];

  return digitalRoot(n.reduce((sum, curr) => {
    return sum += +curr;
  }, 0));
}