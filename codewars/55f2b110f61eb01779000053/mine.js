function getSum(...args) {
  args.sort((a, b) => a - b);

  let sum = 0;

  while(args[0] <= args[1]) {
    sum += args[0];
    args[0]++;
  }

  return sum;
}