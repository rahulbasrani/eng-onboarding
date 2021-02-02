let a, b, result; a = 0;
b = 1;
result = b;
for (let i = 1; i < 10; i++) {
  console.log(result);
  result = a + b;
  a = b;
  b = result;
}
