function findShort (s) {
  return s.split(' ').reduce((s, c) => {
    const cL = c.length;
    if (!s) return cL;
    return s > cL ? cL : s;
  }, null);
}