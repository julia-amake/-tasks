function scramble(str1, str2) {
  const arr2 = str2.split('');

  for(let i = 0; i < arr2.length; i++) {
    const r = new RegExp(arr2[i]);
    if(r.test(str1)) {str1 = str1.replace(r, '');}
    else {return false;}
  }
  return true;
}

// Работает, но не прошло по быстродействию