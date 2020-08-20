function formatString(string, maxLength = 40) {
  let normalizedStringLength = '';
  let lengthString = string.length;

  if (lengthString >= maxLength) {
    normalizedStringLength = string.slice(0, maxLength).concat('...');
  } else {
    normalizedStringLength = string;
  }

  return normalizedStringLength;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
);
