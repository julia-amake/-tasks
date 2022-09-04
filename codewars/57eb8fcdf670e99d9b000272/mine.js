function high(x){
  const words = x.split(' ');
  const scores = words.map(val => val.split('').reduce((sum, curr) => sum + curr.charCodeAt() - 96, 0));
  return words[scores.indexOf(Math.max(...scores))];
}