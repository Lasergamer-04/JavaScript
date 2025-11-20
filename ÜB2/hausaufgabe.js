function permutations(array) {
    if (array.length === 0) return [[]];
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        const remaining = array.slice(0, i).concat(array.slice(i + 1));
        const remainingPerms = permutations(remaining);
        for (const perm of remainingPerms) {
            result.push([current, ...perm]);
        }
    }
    return result;
}

const menge = [1, 2, 3, 4, 5, 6];
const allePermutationen = permutations(menge);
console.log("Alle Permutationen:");
allePermutationen.forEach((perm, index) => {
    console.log(`${index + 1}. (${perm.join(', ')})`);
});