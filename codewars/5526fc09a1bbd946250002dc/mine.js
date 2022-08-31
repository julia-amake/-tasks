function findOutlier (integers) {
  const odd = [];
  const even = [];

  integers.forEach(item => {
    if (item % 2) {odd.push(item);} else {even.push(item);}
  });

  return odd.length === 1 ? odd[0] : even[0];
}