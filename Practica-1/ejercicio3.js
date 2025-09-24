// 3. Crear una función que reciba un arreglo de números y devuelva en un objeto a los pares
// e impares:
// let obj = miFuncion([1,2,3,4,5])
// console.log(obj) // { pares: [2,4], impares: [1,3,5]}
function miFuncion(arr){
    let naturales = {pares: [],impares:[]};
    for(numeros of arr){
        if(numeros % 2 ===0){
            naturales.pares.push(numeros); 
        }else{
            naturales.impares.push(numeros); 
        }
    }
    return naturales;
}

let obj = miFuncion([1,2,3,4,5]);
console.log(obj);