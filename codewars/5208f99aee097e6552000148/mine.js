function solution(string) {
  return string.split('').map(v => /[A-Z]/.test(v) ? ' ' + v : v).join('');
}