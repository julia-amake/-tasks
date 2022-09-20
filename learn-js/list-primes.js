const n = 10;

outer:
  for (n, n > 1; n--) {
    for (let i = n; i > 1; i--) {
      if (n % i == 0) continue outer;
    }
    console.log(n);
  }