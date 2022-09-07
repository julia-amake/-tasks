function firstNonRepeatingLetter(s) {
  const a = s.toLowerCase().split('');

  for(let i = 0; i < a.length; i++) {
    if(a.indexOf(a[i]) === a.lastIndexOf(a[i])) return s[i]
  }

  return '';
}