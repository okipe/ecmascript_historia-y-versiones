// Before in ES5
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world + '!';
console.log(epicPhrase);

// Template literals
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2)

// Multi-line strings
let lorem = 'esto es un string\n' + 'esto es otra línea'; // Before

let lorem2 = `Esta es una frase épica
la continuación de esta frase épica.
 `;

 console.log(lorem);
 console.log(lorem2);