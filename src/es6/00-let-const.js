var lastName = 'David'; // Declarar
lastName = 'Oscar'; // Reasignar
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
animal = 'Cat'; // No se puede reasignar un valor con Const
console.log(animal);

const fruits = () => {
    if(true) {
        var fruit1 = 'Apple'; // Function scope :)
        let fruit2 = 'Kiwi'; // Block scope - No ejecutará esto: fruit2 is not defined
        const fruit3 = 'Banana'; // Block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();