// 5. Crear una función que determine si una cadena es palíndromo (se lee igual al derecho y
// al revés).
// let band = miFuncion(“oruro”)
// console.log(band) // true
// let band = miFuncion(“hola”)
// console.log(band) // false

function miFuncion(cadena){
    let aux=cadena;
    let cad="";
    for(i=cadena.length-1;i>=0;i--){
        cad=cad+cadena[i];
    }
    if(aux == cad){
        return true;
    }else{
        return false;
    }
}

let band = miFuncion('oruro');
console.log(band) // true
// let band = miFuncion('hola');
// console.log(band) // false
