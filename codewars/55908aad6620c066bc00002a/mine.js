function XO (str) {
  const x = str.match(/x/gi) || [];
  const o = str.match(/o/gi) || [];
  return x.length === o.length;
}