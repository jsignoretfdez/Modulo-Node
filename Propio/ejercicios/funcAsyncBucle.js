'use strict';

console.log('empiezo')

let escribeTras2Segundos = function (texto, callback) {
    setTimeout(() => {
        console.log(texto);
        callback() // Ejecuta el callback
    }, 2000)

}

escribeTras2Segundos('texto1', () =>{
    escribeTras2Segundos('texto2', () =>{
        console.log('termino')
    });
});

