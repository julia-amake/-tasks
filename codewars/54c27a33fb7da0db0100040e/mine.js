var isSquare = function (n) {
  const s = Math.sqrt(n);
  return s < 0 ? false : s % 1 === 0;
};