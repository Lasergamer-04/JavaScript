let ErrorCount = 0;
let LastError = "";

function handleCalculation() {
    const resultElement = document.getElementById('result');
    const FsValue = document.getElementById('Fs').value;
    const sValue = document.getElementById('s').value;
    
    //erst mal alles wegmachen
    resultElement.classList.remove('error'); 

    try {
        const radius = RadiusFinder(FsValue, sValue);
        
        // ERFOLG
        resultElement.innerHTML = `Der Radius r ist: ${radius.toFixed(5)} 🎉`;
        
    } catch (error) {
        if (error.message === LastError) {
            ErrorCount++;
        } else {
            LastError = error.message;
            ErrorCount = 1;
        }

        if (ErrorCount > 3 && ErrorCount <= 5) {
            error.message += " (Du hast diesen Fehler schon mehrmals gemacht. Bitte überprüfe deine Eingaben sorgfältig! 🚨)";
        }

        if (ErrorCount > 5 && ErrorCount <= 6) {
            error.message += " (Du bist ja nen echter profi! Bist du sicher, dass du die richtigen Werte eingibst? 😅)";
        }

        if (ErrorCount > 6 && ErrorCount <= 7) {
            error.message += " (Du hast diesen Fehler jetzt schon über sechs Mal gemacht. Vielleicht solltest du eine Pause machen und es später noch einmal versuchen. 🛑)";
        }
        if (ErrorCount > 7 && ErrorCount <= 8) {
            error.message = " (Okay, das ist jetzt lächerlich. Ich werde aufhören, dir zu helfen, bis du deine Eingaben überprüft hast. 🙄)";
        }
        if (ErrorCount > 8 && ErrorCount <= 9) {
            error.message = " (Idiot! Hör auf, mich zu nerven! 😡)";
        }
        if (ErrorCount > 9) {
            error.message = "Du hast es geschafft, den ultimativen Fehlerzustand zu erreichen! Ich werde jetzt aufhören, dir zu helfen. Viel Glück! 🚫";
        }

        // FEHLER
        resultElement.classList.add('error'); 
        resultElement.innerHTML = error.message;
    }
}

function bisektion(f,s) {
    let down = 0;
    let up = Math.PI;
    let a = (down + up) / 2;
    let dif;

    const y = 8*f / s **2;

    if (y > Math.PI) {
        throw new Error("Fehler: Kein gültiger Wert für Fs und s. (zu groß) 👎");
    }

    if (y < 0) {
        throw new Error("Fehler: Kein gültiger Wert für Fs und s. (zu klein) 👎");
    }


    do {
        let zaehler = a - Math.sin(a);
        let nenner = Math.sin(a/2) ** 2;

        dif = zaehler/nenner;
        
        if (y < dif) {
            up = a;
        } else {
            down = a;
        }

        a = (down + up) / 2;
    } while (Math.abs(dif - y) > 0.00001);

    return a;
}

function RadiusFinder(fInput, sInput) {
    if (fInput === undefined || sInput === undefined) {
        throw new Error("Fehler: Fs und s müssen angegeben werden. (undefined) 👎");
    }

    if (fInput === null || sInput === null) {
        throw new Error("Fehler: Fs und s dürfen nicht null sein. 👎");
    }
    if (fInput === "" || sInput === "") {
        throw new Error("Fehler: Fs und s dürfen nicht leer sein. 👎");
    }

    if (isNaN(sInput) || isNaN(fInput)) {
        throw new Error("Fehler: s und Fs müssen Zahlen sein. (NaN) 👎");
    }

    const f = Number(fInput);
    const s = Number(sInput);

    if (f <= 0 || s <= 0) {
        throw new Error("Fehler: Fs und s müssen positive Zahlen sein und nicht null. (<= 0) 👎");
    }

    let angle = bisektion(f,s);

    let x = (s**2) / (8*(Math.sin(angle/2))**2);


    let r = Math.sqrt(x * 2);
    return r;
}

// 1, 2
// ungefähr 1.07
// 157.0796, 20
// ungefähr 10