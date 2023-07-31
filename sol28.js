// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

function nbDig(n, d) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < Math.pow(i,2).toString().length; j++) {
      Math.pow(i,2).toString()[j] == d ? count++ : false;
    }
  }
  return count;
}