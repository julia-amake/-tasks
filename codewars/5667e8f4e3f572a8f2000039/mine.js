function accum (s) {
  s = s.toLowerCase();

  return s.split('').map((item, i) => {
    let a = item.toUpperCase();

    for (let j = 0; j < i; j++) {a += item;}

    return a;
  }).join('-');
}