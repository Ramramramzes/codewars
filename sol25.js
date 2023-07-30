// The four operators are "add", "subtract", "divide", "multiply".
// A few examples:(Input1, Input2, Input3 --> Output)
// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5

function arithmetic(a, b, operator){
  let res;
  switch(operator){
    case 'add':
      res = a + b;
      break;
    case 'subtract':
      res = a + b;
      break;
    case 'multiply':
      res = a * b;
      break;
    case 'divide':
      res = a / b;
      break;
  }
  return res;
}