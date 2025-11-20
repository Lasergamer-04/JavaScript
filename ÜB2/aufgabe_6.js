// Fonction pour la page web: lit les champs .vote et affiche une visualisation texte
window.visualiserVotes = function() {
    // Longueur totale de la ligne (ajustable)
    const zeilenLaenge = 60;
    const symbole = ['o', '*', 'x', '+', '#'];

    // Récupérer les valeurs depuis les inputs avec la classe "vote"
    const inputs = document.querySelectorAll('.vote');
    const stimmen = Array.from(inputs).map(inp => {
        const n = parseFloat(inp.value);
        return (isNaN(n) || n < 0) ? 0 : n;
    });

    const summe = stimmen.reduce((a, b) => a + b, 0);
    const resultatEl = document.getElementById('resultatVotes');

    if (!resultatEl) return; // rien à faire si l'élément n'existe pas

    if (summe === 0) {
        // Préserver les sauts de ligne et la police monospace
        resultatEl.style.whiteSpace = 'pre-wrap';
        resultatEl.style.fontFamily = 'monospace';
        resultatEl.innerText = 'Aucune voix saisie.';
        return;
    }

    // Calculer les longueurs réelles (float) puis arrondir proprement en distribuant les restes
    const raw = stimmen.map(s => (s / summe) * zeilenLaenge);
    const floored = raw.map(r => Math.floor(r));
    let used = floored.reduce((a, b) => a + b, 0);
    let remaining = zeilenLaenge - used;

    // Distribuer les caractères restants selon la plus grande partie fractionnaire
    const fractions = raw.map((r, i) => ({i, frac: r - Math.floor(r)}));
    fractions.sort((a, b) => b.frac - a.frac);
    for (let k = 0; k < remaining; k++) {
        floored[fractions[k % fractions.length].i]++;
    }

    // Construire la ligne de visualisation
    let ergebnis = '';
    for (let i = 0; i < floored.length; i++) {
        const sym = symbole[i % symbole.length];
        ergebnis += sym.repeat(floored[i]);
    }

    // Construire la légende avec pourcentages
    const legendes = stimmen.map((s, i) => {
        const pct = (s / summe) * 100;
        const sym = symbole[i % symbole.length];
        return `Parti ${i+1} (${sym}): ${s} votes (${pct.toFixed(1)}%)`;
    });

    // Préserver les sauts de ligne et la police monospace
    resultatEl.style.whiteSpace = 'pre-wrap';
    resultatEl.style.fontFamily = 'monospace';
    // Afficher: barre puis légende
    resultatEl.innerText = ergebnis + '\n\n' + legendes.join('\n');
};
