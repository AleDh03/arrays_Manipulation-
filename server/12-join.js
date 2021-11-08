// el método join() une todos los elementos de un array en una cadena.
const elements = ['Earth', 'Fire', 'Air', 'Water'];

let rtaFinal = ' ';
const separator = '--';

for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}

const rta = elements.join('--');
console.log('for', rtaFinal);
console.log('rta', rta);


//
const title = 'Manipulation Course of Arrays';

const UrlFinal = title.split(' ').join('-').toLocaleLowerCase();
console.log(title.split(UrlFinal));