function getSign(x) {
  if (x > 0) {
    return "Positivo";
  } else if (x < 0) {
    return "Negativo";
  } else
    (x = 0) => {
      return "Zero";
    };
}

console.log(getSign(2));
console.log(getSign(-2));
console.log(getSign(0));

function sum(a, b) {
  console.log(a + b);
}
console.log(sum(1, 2));
