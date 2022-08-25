function pigIt (str) {
  return str.split(' ').map(item => {
    if (!item.match(/[a-zA-Z]/)) return item;
    if (item.lenght === 1) return item += 'ay';

    const letters = item.split('');
    letters.push(letters.shift(), 'ay');
    return letters.join('');
  }).join(' ');
}