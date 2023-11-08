// arrays destructuring

let fruits = ['Apple', 'Banana']; 
let [a, b] = fruits; // Usando la destructuración de arrays para asignar valores a las variables 'a' y 'b'.
console.log(a, fruits[1]); // Imprime el valor de 'a' y el segundo elemento de 'fruits', que es 'Banana'.

// Object destructuring

let user = { username: 'Oscar', age: 34 };
let { username, age } = user; // Usando la destructuración de objetos para asignar valores a las variables 'username' y 'age'.
console.log(username, user.age); // Imprime el valor de 'username' y la propiedad 'age' del objeto 'user'.

// for-of loop destructuring

const arr = ['a', 'b'];
// Utilizando un bucle 'for-of' para recorrer el array 'arr' y destructurar sus elementos.
// 'index' representa el índice del elemento actual y 'element' representa el valor del elemento actual.
for (const [index, element] of arr.entries()) {
    console.log(index, element); // Imprime el 'index' (índice) y el 'element' (valor) del elemento actual en el array.
}

// spread operator

let person = { name: 'Oscar', age: 28};
let country = 'MX';

let data = { id: 1, ...person, country }
console.log(data);

// rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);

// EJEMPLO

// Usamos la sintaxis `...` para convertir la cadena `👩‍❤️‍💋‍👩` en una lista.
// La sintaxis `...` toma todos los caracteres de la cadena y los agrega a la lista.
let kissEmoji = [..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji)
/* CONSOLE **
[
  '👩', '‍',   '❤',
  '️',   '‍',   '💋',
  '‍',   '👩'
]
************/

// Usamos la misma sintaxis para convertir la cadena `👨‍👩‍👦‍👦` en una lista.
let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(familyEmoji)

/* CONSOLE **
[
  '👨', '‍',   '👩',
  '‍',   '👦', '‍',
  '👦'
]
************/