// 2. Crear una función que invierta el orden de las palabras en una frase.
// let cad = miFuncion(“abcd”)
// console.log(obj) // dcba

function miFuncion(x){
    let cad="";
    for(i=x.length-1;i>=0;i--){
        cad=cad+x[i];
    }
    return cad;
}

let cad = miFuncion('abcd');
console.log(cad);
