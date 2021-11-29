const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');


/**
 *  @description add families
 *  @method GET /add-family
 */
route.get('/add-family', services.add_family)

/**
 *  @description for update family
 *  @method GET /update-family
 */
route.get('/update-family', services.update_family)


// API
route.post('/api/families', controller.createFam);
route.get('/api/families', controller.findFam);
route.put('/api/families/:id', controller.updateFam);
route.delete('/api/families/:id', controller.deleteFam);


module.exports = route