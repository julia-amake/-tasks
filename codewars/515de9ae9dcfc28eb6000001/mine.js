function solution(str){
  return str.match(/.{1,2}/g)?.map(val => val.length === 2 ? val : val + '_') || [];
}