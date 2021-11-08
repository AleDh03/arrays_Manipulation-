const items = [1, 2, 3, 3, 3, 4, 4, 5, 6, 6, 6, 7, 8, 8];

const rta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj
}, {})
console.log(rta)

const data = [
    {
        name: "alejandro",
        level: "medium"
    },
    {
        name: "luis",
        level: "high"
    },
    {
        name: "andrea",
        level: "medium"
    },
    {
        name: "lía",
        level: "low"
    },
    {
        name: "George",
        level: "legend"
    },
];

const rta1 =
    data
        .map(item => item.level)
        .reduce((obj, item) => {
            if (!obj[item]) {
                obj[item] = 1;
            } else {
                obj[item] = obj[item] + 1;
            }
            return obj
        }, {});

console.log(rta1);