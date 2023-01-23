function boxOfAlphabet(row, col) {
  const result = [];
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let counter = 0;

	for (let i = 0; i < row; i++) {
    const resultRow = [];

    for (let j = 0; j < col; j++) {
      resultRow.push(alphabet[counter]);
      counter++;
      if (counter >= alphabet.length) {
        counter = 0;
      }
    }

    result.push(resultRow);
  }

  return result;
}

console.log(boxOfAlphabet(6, 5))


// [
//   ['a', 'b', 'c', 'd', 'e'],
//   ['f', 'g', 'h', 'i', 'j'],
//   ['k', 'l', 'm', 'n', 'o'],
//   ['p', 'q', 'r', 's', 't'],
//   ['u', 'v', 'w', 'x', 'y'],
//   ['z', 'a', 'b', 'c', 'd']
// ]