function TestTriangle(a, b, c) {
    return (a + b >= c && a + c >= b && b + c >= a);
}

function TestInteger(value) {
    return Number.isInteger(value);
}

document.getElementById('sumBtn').addEventListener('click', function() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const num3 = Number(document.getElementById('num3').value);
    const sumResult = document.getElementById('sumResult');

    if (!TestInteger(num1) || !TestInteger(num2) || !TestInteger(num3)) {
        sumResult.innerText = 'Bitte geben Sie gültige ganze Zahlen ein.';
        return;
    }

    if (TestTriangle(num1, num2, num3)) {
        sumResult.innerText = 'Die Zahlen können die Seitenlängen eines Dreiecks bilden.';
    } else {
        sumResult.innerText = 'Die Zahlen können KEINE Seitenlängen eines Dreiecks bilden.';
    }
});
