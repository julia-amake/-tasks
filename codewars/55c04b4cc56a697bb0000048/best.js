function scramble(str1, str2) {
  let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});
  return str2.split("").every((character) => --occurences[character] >= 0);
}

const scramble = (str1, str2) =>
  [...str2].every(val => str2.split(val).length <= str1.split(val).length);