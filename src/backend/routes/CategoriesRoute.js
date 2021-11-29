const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');


/**
 *  @description add categories
 *  @method GET /add-category
 */
route.get('/add-category', services.add_category)

/**
 *  @description for update category
 *  @method GET /update-category
 */
route.get('/update-category', services.update_category)


// API
route.post('/api/categories', controller.createCat);
route.get('/api/categories', controller.findCat);
route.put('/api/categories/:id', controller.updateCat);
route.delete('/api/categories/:id', controller.deleteCat);


module.exports = route