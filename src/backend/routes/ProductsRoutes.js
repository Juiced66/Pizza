const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');


/**
 *  @description add products
 *  @method GET /add-product
 */
route.get('/add-product', services.add_product)

/**
 *  @description for update product
 *  @method GET /update-product
 */
route.get('/update-product', services.update_product)


// API
route.post('/api/products', controller.createProd);
route.get('/api/products', controller.findProd);
route.put('/api/products/:id', controller.updateProd);
route.delete('/api/products/:id', controller.deleteProd);


module.exports = route