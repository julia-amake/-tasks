function invert(obj) {
  return Object.keys(obj).reduce((invertedObj, key) => {
    invertedObj[obj[key]] = key;
    return invertedObj;
  }, {});
}

console.log(invert({ a: 1, b: 2 }));