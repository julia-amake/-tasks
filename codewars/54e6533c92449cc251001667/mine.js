var uniqueInOrder = function (iterable) {
  if (typeof iterable === 'string') iterable = iterable.split('');

  const uniqueArr = [];
  let curr = null;

  iterable.forEach((item, i) => {
    if (curr === item) return;
    curr = item;
    uniqueArr.push(item);
  });

  return uniqueArr;
};