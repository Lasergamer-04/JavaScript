const greeting = "hallo";
const poem =`a
b
c
d
`;
console.log(poem);

const name = "peter";
const greet = greeting + ' ' + name
// besser:
const greet2 = `${greeting} ${name}!`
console.log(greet)
console.log(greet2)