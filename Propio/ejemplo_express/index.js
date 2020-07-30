'use strict';

// Cargar express y http

const express = require('express');
const http = require ('http');

const app = express();

// Definir rutas

app.get('/', (request, response, next) =>{
    response.send('Hola');
});

// Arrancar el servidor
const server = http.Server(app);
server.listen(3000, () => {
    console.log('Servidor arrancado en puerto 3000');
});

