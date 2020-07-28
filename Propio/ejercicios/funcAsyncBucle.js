'use strict';

console.log('empiezo')

let escribeTras2Segundos = function (texto, callback) {
    setTimeout(() => {
        console.log(texto);
        callback() // Ejecuta el callback
    }, 2000)
}

let serie = function (n, fnAEjecutar, callbackFinalizacion) {
    if(n == 0){
        callbackFinalizacion();
        return;
    }
    n -= 1;
    fnAEjecutar('texto' + n, () => {
        serie(n, fnAEjecutar, callbackFinalizacion);
    })
}


serie(5, escribeTras2Segundos, () => {
    console.log('Terminado');
});


