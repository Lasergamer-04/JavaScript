document.getElementById("calculateInterestBtn").addEventListener("click", () => {
    const kapital = parseFloat(document.getElementById("capitalInput").value);
    const rate = parseFloat(document.getElementById("rateInput").value);
    const time = parseFloat(document.getElementById("timeInput").value);

    if (isNaN(kapital) || isNaN(rate) || isNaN(time)) {
        alert("Bitte geben Sie gültige Zahlen für Kapital, Zinssatz und Laufzeit ein.");
        return;
    }
    const zinsen = kapital * (Math.E ** (rate * time));

    document.getElementById("interestResult").innerText = `Die Zinsen betragen: ${zinsen} Euro`;
});