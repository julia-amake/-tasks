function moveZeros(arr) {
  const newArr = [];
  const zeros = [];

  arr.forEach(item => {
    if(item === 0) {zeros.push(0)}
    else {newArr.push(item)}
  });

  return newArr.concat(zeros);
}