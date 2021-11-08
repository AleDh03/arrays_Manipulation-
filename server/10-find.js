//El método FIND() devuelve el primer elemento del array que cumpla
//con la condición* dada o no devuelve undefine si es qeu no encuentra ningun elemento que cumpla los requisitos..

const numbers = [1, 30, 49, 29, 10, 13];

let rta = undefined;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 30) {
        rta = element;
        break
    };
};
console.log('for', rta);

// vs
const rta2 = numbers.find(item => item === 30);
console.log('find', rta2);


//
const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞'
    },
];

const rta3 = products.find(item => item.id === '🍔');
console.log('find', rta3);

//FINDiNDEX => posición donde esta ese primer elemento..
const rta4 = products.findIndex(item => item.id === '🍔');
console.log('findIndex', rta4);