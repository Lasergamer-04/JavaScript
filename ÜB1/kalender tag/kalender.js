function verifyDate(day, month, year) {
    if (day < 1 || month < 1 || year < 0) {
        return false;
    }
    if (day > 31 || month > 12 || year > 99) {
        return false;
    }

    return true;
}

document.getElementById("calculateDayBtn").addEventListener("click", function() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    if (!verifyDate(day, month, year)) {
        document.getElementById("dateResult").innerText = "Bitte geben Sie ein gültiges Datum ein.";
        return;
    }

    const y = year - Math.floor((14 - month) / 12);
    const x = y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400);
    const m = month + 12 * Math.floor((14 - month) / 12) - 2;
    const d = (day + x + Math.floor((31 * m) / 12)) % 7;


    const daysOfWeek = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    if (d >= 0 && d < daysOfWeek.length) {
        document.getElementById("dayResult").innerText = "Der " + day + "." + month + "." + year + " ist ein " + daysOfWeek[d] + ".";
    } else {
        document.getElementById("dayResult").innerText = "Fehler bei der Berechnung des Wochentags.";
    }
});
