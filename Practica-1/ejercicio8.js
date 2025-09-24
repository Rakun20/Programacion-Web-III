//8. Realizar un código para ejecutar una función callback después 2 segundos

const operacion = (numero1, numero2, callback) => {
    return setTimeout(() => {
        callback(numero1, numero2)
    }, 2000);
}

operacion(1,2, (a,b) => {
    console.log(a+b)
});
