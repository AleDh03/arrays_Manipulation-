//Buscar si dentro de un array se encuentra el elemento solicitado
const pets = ['cat', 'dog', 'bat'];

let includeInArray = false;

for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true;
        break;
    }
}
console.log('for', includeInArray);

//vs

const rta = pets.includes('dog');
console.log('for', includeInArray);
console.log('include', rta);