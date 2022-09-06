function generateHashtag (str) {
  str = str.trim();
  if(!str) return false;
  str = str.split(/\W+/).map(item => {
    return item[0].toUpperCase() + item.slice(1);
  }).join('');
  return str.length >= 140 ? false : '#' + str;
}