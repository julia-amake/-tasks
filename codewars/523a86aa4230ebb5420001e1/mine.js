function anagrams(word, words) {
  const wordSorted = word.split('').sort().join('');
  return words.filter(item => item.split('').sort().join('') === wordSorted);
}