function istLuhnGueltigTest(zahl) {
    let summe = 0n;
    let position = 1n; // Position von rechts nach links (beginnend bei 1)
    let temp = zahl;

    while (temp > 0n) {
        let ziffer = temp % 10n;
        summe += ziffer;

        console.log(summe + " summe nach ziffer")

        temp = temp / 10n;
        position += 1n;

        ziffer = temp % 10n;
        let doppelt = ziffer * 2n;
        doppelt = doppelt % 9n; // Problem bei 9 gibt nicht 9 sondern 0
        summe += doppelt;

        console.log(doppelt + " doppelt")
        console.log(summe + " summe")

        temp = temp / 10n;
        position += 1n;
    }
    return summe % 10n === 0n;
}

// Beispiel: 371449635398431
const testNummer = 371449635398431n;
console.log(`Ist gültig nach Luhn: ${istLuhnGueltigTest(testNummer)}`);