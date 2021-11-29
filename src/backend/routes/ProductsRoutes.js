const express = require('express');
const routeProd = express.Router()

const controller = require('../controller/controller');


// API
routeProd.post('/api/products', controller.createProd);
routeProd.get('/api/products', controller.findProd);
routeProd.put('/api/products/:id', controller.updateProd);
routeProd.delete('/api/products/:id', controller.deleteProd);


module.exports = routeProd