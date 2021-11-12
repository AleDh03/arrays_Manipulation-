const months = ["March", "Jan", "Feb", "Dec"];

months.sort();
console.log(months);

//
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a, b) => b - a);
console.log(numbers);

//
const words = [
    "reservé",
    "premier",
    "communique",
    "café",
    "adieu",
    "éclair",
    "banana",
];
words.sort((a, b) => a.localeCompare(b));
console.log(words);

const orders = [
    {
        customerName: "Ale",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Luis",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Lía",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

orders.sort((a, b) => a.total - b.total);
console.log(orders);