function sinTaylor(x, terms = 6) {
  let sinx = 0;

  for (let n = 0; n < terms; n++) {
    let exponent = 2 * n + 1;
    let sign = n % 2 === 0 ? 1 : -1;
    sinx += sign * (x ** exponent) / factorial(exponent);
  }

  return sinx;
}

// Fakultätsfunktion
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(sinTaylor(0));        // Erwartet: 0
console.log(sinTaylor(Math.PI/2));  // Erwartet: ca. 1
console.log(sinTaylor(Math.PI));    // Erwartet: ca. 0