function checkForSpam(str) {
  let string = str.toLowerCase();
  return string.includes('spam') || string.includes('sale') ? true : false;
}
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
