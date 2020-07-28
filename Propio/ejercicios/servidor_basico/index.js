// Cargar librería hhtp

const http = require('http');
const chanceModule = require('chance');

const chance = new chanceModule();

// Definir un servidor

const server = http.createServer(function (request, response) {

    const nombre = chance.name();

   response.writeHead(200, {
       'Content-type': 'text/html'
   });
   response.end(`Wake up, <strong>${nombre}</strong>........`);
});

// Arrancar el servidor

server.listen(1337, '127.0.0.1');
console.log('Servidor arrancado en http://127.0.0.1:1337');