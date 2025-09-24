// 4. Crear una función que reciba un arreglo de números y devuelva el número mayor y el
// menor, en un objeto.
// let obj = miFuncion([3,1,5,4,2])
// console.log(obj) // { mayor: 5, menor: 1 }
function miFuncion(array){
    let maymen={mayor:0,menor:0};
    let men=array[0];
    let may=array[0];
    for(numero of array){
        men = men < numero ? men : numero;
        may = may > numero ? may : numero;
    }
    maymen.mayor=(may);
    maymen.menor=(men);
    return maymen;

}
let obj = miFuncion([3,1,5,4,2]);
console.log(obj);