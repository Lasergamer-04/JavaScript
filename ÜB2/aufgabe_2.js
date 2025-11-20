const gradToRad = (grad) => (grad * Math.PI) / 180;

const RadToDegrees = (radian) => (radian * 180) / Math.PI;

function berechneDistanz(x1, y1, x2, y2) {
    // Umrechnung von Grad in Radiant
    const x1Rad = gradToRad(x1);
    const y1Rad = gradToRad(y1);
    const x2Rad = gradToRad(x2);
    const y2Rad = gradToRad(y2);

    // Anwendung der Großkreisformel
    const a = (Math.sin(x1Rad) * Math.sin(x2Rad));
    const b = (Math.cos(x1Rad) * Math.cos(x2Rad) * Math.cos(y1Rad - y2Rad));
    const c = (Math.acos(a + b));
    const d = 60 * RadToDegrees(c); // Umrechnung in Seemeilen

    return d; // in Seemeilen
}

// Beispiel: Paris (48.87° N, -2.33° W) nach San Francisco (37.8° N, -122.4° W)
const distanz = berechneDistanz(48.87, -2.33, 37.8, 122.4);
console.log("Distanz in Seemeilen:", distanz);
console.log("Distanz in Kilometern:", (distanz * 1.852));
