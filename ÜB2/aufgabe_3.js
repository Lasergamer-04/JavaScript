function dezimalZuBinaer(zahl) {
    let reste = [];

    // Solange die Zahl größer als 0 ist
    while (zahl > 0) {
        let rest = zahl % 2;       // Rest der Division durch 2
        reste.push(rest);          // Rest speichern
        zahl = Math.floor(zahl / 2); // Ganzzahliger Quotient
    }

    // Die Reste rückwärts zusammensetzen
    return reste.reverse().join('');
}

// Beispiel: Zahl 13
let dezimalzahl = 13;
let binaer = dezimalZuBinaer(dezimalzahl);
console.log(`Die Binärdarstellung von ${dezimalzahl} ist: ${binaer}`);
