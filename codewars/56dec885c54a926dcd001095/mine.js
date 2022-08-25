function opposite(number) {
  return number === 0 ? 0 : number > 0 ? -number : Math.abs(number);
}

console.log(opposite(0));
console.log(opposite(2));
console.log(opposite(2.4));
console.log(opposite(3.56));