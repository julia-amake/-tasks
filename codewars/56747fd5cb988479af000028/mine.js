function getMiddle (s) {
  const halfLength = s.length / 2;
  return s.length % 2 ? s[Math.floor(halfLength)] : s[halfLength - 1] + s[halfLength];
}