'use strict'

// Definimos una función constructora de objetos

function Personas (nombre) {
    this.nombre = nombre;
}

// Crear un objetos

const luis = new Personas('Luis');

// Añadimos propiedades al prototipo de las personas

Personas.prototype.saluda = function (){
    console.log(`Hola me llamo ${this.nombre}`);
}

luis.saluda();

// Herencia de personas
// Función

function Agente (nombre){
    // heredar el constructor de personas
    Personas.call(this, nombre);
}

// Heredamos sus propiedades y metodos de Personas.
Agente.prototype = Object.create(Personas.prototype);
Agente.prototype.constructor = Agente;


const smith = new Agente ('Smith');

smith.saluda();

/*console.log(smith instanceof Agente);
console.log(smith instanceof Personas);
console.log(smith instanceof Object);*/

// Herencia múltiple

// Mixin de Superheroe

function Superheroe(){
    this.vuela = function (){
        console.log(this.nombre, 'vuela');
    }
}

// Copiar propiedades de Superhero a Agente

Object.assign(Agente.prototype, new Superheroe());

smith.vuela()