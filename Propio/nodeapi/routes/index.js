var express = require('express');
var router = express.Router();
const { query, validationResult } = require('express-validator');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.locals.tittle = 'Express';
  const segundo = (new Date()).getSeconds();

  res.locals.valor = '<script>alert("Inyeccion de codigo");</script>'

  res.locals.condicion = {
    segundo: segundo,
    estado: segundo % 2 == 0
  };

  res.locals.users = [
    {
      name: 'Smith',
      age: 39
    },

    {
      name: 'Jones',
      age: 22
    },

    {
      name: 'Brown',
      age: 59
    }
  ];

  res.render('index');//, { title: 'Express' });
});

router.get('/paramenruta/:etiqueta', (req, res, next) => {
  console.log(req.params);
  res.send('Ok');
});

router.get('/paramenrutaopcional/:numero?', (req, res, next) =>{
  console.log(req.params);
  res.send('Ok, al opcional');
});

router.get('/parametros/:id([0-9]+)/piso/:piso/puerta/:puerta', (req, res, next) => {
  console.log(req.params);
  res.send('Ok, parámetros');
});

router.get('/enquerystring',
    [ // Validator
    query('color').isAlpha().withMessage('Debería ser texto'),
    query('talla').isNumeric().withMessage('Debería ser numérico')
    ],
    (req, res, next) => {
  validationResult(req).throw(); // Lanza exception si hay error de validación
  console.log(req.query);
  res.send('Ok');
});

// Recibir parámetros en el body
router.post('/enelbody', (req, res, next) => {
  console.log(req.body);
  res.send('Ok');
})

module.exports = router;
