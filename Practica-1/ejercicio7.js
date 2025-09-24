// 7. Almacenar el resto de los elementos de un arreglo sin tomar en cuenta los dos primeros
// elementos de un arreglo, mediante desestructuración.

const array = ['Pedro','Juan','Ines','Luis','Omar'];
const [nombre1,nombre2, ...resto] = array;
console.log(resto);