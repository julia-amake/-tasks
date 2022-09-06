function validParentheses(parens) {
  if(!parens) return true;
  if(parens.indexOf('()') === -1) return false;
  return validParentheses(parens.replace('()', ''));
}