function findLongestWord(string = '') {
  let argument = string.split(' ');
  let longestWord = argument[0];

  for (const arg of argument) {
    if (arg.length > longestWord.length) {
      longestWord = arg;
    }
  }
  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
('jumped');

console.log(findLongestWord('Google do a roll'));
('Google');

console.log(findLongestWord('May the force be with you'));
('force');
