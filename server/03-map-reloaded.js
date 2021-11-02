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
        delivered: false,
    },
];

console.log("original", orders);
const rta = orders.map((item) => item.total);
console.log("rta", rta);

// const rta2 = orders.map((item) => {
//   item.tax = 0.19;
//   return item;
// });
// console.log("rta2", rta2);
// console.log("original", orders);
const rta3 = orders.map((item) => {
    return {
        ...item,
        tax: 0.19,
    };
});
console.log("rta3", rta3);
console.log("original", orders);