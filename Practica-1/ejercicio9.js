//9. Crear una promesa que devuelva un mensaje de éxito después de 3 seg
const promesa = (numero1, numero2) => {
    const resultado = numero1 + numero2;
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(resultado)
        }, 3000);
    });
}

promesa(1,3)
.then(resultado => console.log(resultado));