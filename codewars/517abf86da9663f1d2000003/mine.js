function toCamelCase (str) {
  const arr = str.split(/[-_]/);

  return arr.map((item, i) => {
    if (i === 0) return item;
    return item[0].toUpperCase() + item.slice(1);
  }).join('');
}