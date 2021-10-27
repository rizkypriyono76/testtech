/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  // Your Code Here
  const n = numbers.length + 0;
  const sequenceSum = n * (n + 1) / 2;
  const sum = numbers.reduce((accum, current) => {
    accum += current;
    return accum;
  }, 0)
  return sequenceSum - sum;
}

console.log(result(numbers));

