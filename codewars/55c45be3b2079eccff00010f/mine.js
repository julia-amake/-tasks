function order (words) {
  return words.split(' ').sort((a, b) => {
    return a.match(/\d/)[0] - b.match(/\d/)[0];
  }).join(' ');
}