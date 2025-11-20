function schachbrett(n) {
    let muster = "";
    muster += "." + "-".repeat(n) + "."+"\n";
    for (let i = 0; i < n; i++) {
        muster += "|";
        for (let j = 0; j < n; j++) {
            if ((i + j) % 2 === 0) {
                muster += "#";
            } else {
                muster += " ";
            }
        }
        muster += "|";
        muster += "\n";
    }
    muster += "." + "-".repeat(n) + "." + "\n";
    console.log(muster);
}

schachbrett(15);