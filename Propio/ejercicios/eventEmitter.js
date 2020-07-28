'use strict';

const EventEmitter = require('events');

// Creamos una instancia de emisor de eventos

const emisor = new EventEmitter();

emisor.on('Llamada de teléfono', (options) =>{
    if(options.llamante === 'Madre'){
        return;
    }
    console.log('ring, ring');
});

emisor.once('Llamada de teléfono', (options) =>{
    console.log('brrr, brrrr');
})


emisor.emit('Llamada de teléfono', {llamante: 'Madre'});

