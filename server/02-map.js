//.map? Transforma, es inmutable lo que significa que no modifica el array original
// si no que crea uno nuevo con la transformación aplicad, manteniendo el mismo length.

const letters = ['a', 'b', 'c'];
const newArray = letters.map(item => item + '++');
// const newArray = [];el equivalente a map, aunque con mas lineas de codigo...
// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];
//     newArray.push(element + '++');
// };
console.log('original', letters);
console.log('new', newArray);
