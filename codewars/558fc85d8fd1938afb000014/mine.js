function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b).length = 2;
  return numbers[0] + numbers[1];
}