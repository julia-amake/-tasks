function destroyer(arr, ...args) {
  const newArr = [];
  arr.forEach(item => {
    if(args.indexOf(item) === -1) newArr.push(item);
  });
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);