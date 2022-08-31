function alphabetPosition (text) {
  const ARR_EN = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const letters = text.toLowerCase().match(/[a-z]/g);
  if (!letters) return '';
  return letters.map(item => ARR_EN.indexOf(item) + 1).join(' ');
}