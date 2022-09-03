function whatIsInAName (collection, source) {
  const arr = [];
  // Only change code below this line
  collection.forEach(obj => {
    if (Object.keys(source).every(item => obj[item] === source[item])) {
      arr.push(obj);
    }
  });
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, {
  first: 'Tybalt',
  last:  'Capulet'
}], { last: 'Capulet' });