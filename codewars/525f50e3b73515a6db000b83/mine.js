function createPhoneNumber(numbers){
  return numbers.reduce((result, curr, i)=>{
    switch(i) {
      case 2: return result + curr + ') '; break;
      case 5: return result + curr + '-'; break;
      default: return result + curr;
    }
  }, '(');
}