// 1. Crear una función que cuente cuántas veces aparece cada vocal en un texto y devuelva el
// resultado en un objeto.
// let obj = miFuncion(“euforia”)
// console.log(obj) // { a: 1, e: 1, i: 1, o: 1, u: 1 }

function miFuncion(x){
    let vocales = {a:0,e:0,i:0,o:0,u:0};
    for(letra of x){
        if(letra in vocales){
            vocales[letra]++;
        }
    }
    return vocales;
}

let obj = miFuncion("euforia");
console.log(obj);