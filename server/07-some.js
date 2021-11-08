const numbers = [1, 2, 3, 4, 5, 6];

let rta = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 0) {
        rta = true;
        break;
    };
};

console.log(rta);

//vs

const rta2 = numbers.some(item => item % 2 === 0);
console.log("rta2", rta2);


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

const rta3 = orders.some(item => item.delivered);
console.log("rta3", rta3);

//
const dates = [
    {
        startDate: newDate(2021, 1, 1, 10),
        endDate: newDate(2021, 1, 1, 11),
        title: "Cita de trabajo",
    },
    {
        startDate: newDate(2021, 1, 1, 15),
        endDate: newDate(2021, 1, 1, 15, 30),
        title: "Cita con mi jefe",
    },
    {
        startDate: newDate(2021, 1, 1, 20),
        endDate: newDate(2021, 1, 1, 21),
        title: "Cena",
    },
];

const newAppointment = {
    startDate: newDate(2021, 1, 1, 8),
    endDate: newDate(2021, 1, 1, 9, 30),
};

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            { start: date.startDate, end: date.endDate },
            { start: newDate.startDate, end: newDate.endDate }
        )
    })
}
console.log('isOverlap', isOverlap(newAppointment));