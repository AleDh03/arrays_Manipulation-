//Filter es un metodo inmutable, filtra los elementos de un array con base a un condicional
//los cuales serán parte de un nuevo array

const words = ['spray', 'limit', 'elite', 'exuberant',];
const newArray = [];

for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >= 6) {
        newArray.push(item);
    };
};
console.log('newArray', newArray);
console.log('original', words);

const rta = words.filter(item => item.length >= 6);//esta sola linea de codigo es equivalente a todo el *for anterior
console.log('rta', rta);
console.log('original', words);



const orders = [
    {
        customerName: 'Alejandro',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Lía',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Andrea',
        total: 189,
        delivered: true,
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true,
    },
];

const rta3 = orders.filter(item => item.delivered && item.total >= 100);//devuelve los elementos que cumplen con la entrega y siendo mayores a 100
console.log('rta3', rta3);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log(search('Ale'));