function printSeven(a, b) {
    let count = 0;
    let maxiter = 6 * ((b - a) / 7);

    if (a > b) {
        throw "Error: b must be greater than a";
    }

    for (let i = a; i <= b; i++) {
        if (i % 7 === 0) {
            console.log(i);
            count++;
        }
        if (count >= maxiter) {
            break;
        }
    }
}

printSeven(10, 10000);
