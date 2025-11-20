function cosTaylor(x, terms = 6) {
  let cosx = 0;

  for (let n = 0; n < terms; n++) {
    let exponent = 2 * n;
    let sign = n % 2 === 0 ? 1 : -1;
    cosx += sign * (x ** exponent) / factorial(exponent);
  }

  return cosx;
}

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Test
console.log("cos(0) =", cosTaylor(0));               // ≈ 1
console.log("cos(π/2) =", cosTaylor(Math.PI / 2));   // ≈ 0
console.log("cos(π) =", cosTaylor(Math.PI));         // ≈ -1
