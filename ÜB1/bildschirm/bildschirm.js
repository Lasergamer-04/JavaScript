function TestNumber(value) {
    return Number.isInteger(value) && value > 0;
}

document.getElementById('calculateBtn').addEventListener('click', function() {
    const width = Number(document.getElementById('widthInput').value);
    const height = Number(document.getElementById('heightInput').value);
    const diagonal = Number(document.getElementById('diagonalInput').value);
    const resultElem = document.getElementById('result');

    if (!TestNumber(width) || !TestNumber(height) || !TestNumber(diagonal)) {
        resultElem.innerText = 'Bitte geben Sie gültige ganze positive Zahlen für Breite und Höhe sowie eine positive Diagonale ein.';
        return;
    }

    const ratio = width / height;
    const h = diagonal / Math.sqrt(1 + ratio * ratio);
    const w = ratio * h;

    resultElem.innerText = `Berechnete Breite: ${w}, Höhe: ${h}`;
});