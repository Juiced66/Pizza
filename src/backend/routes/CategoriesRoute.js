const express = require('express');
const routeCat = express.Router()

const controller = require('../controller/controller');


// API
routeCat.post('/api/categories', controller.createCat);
routeCat.get('/api/categories', controller.findCat);
routeCat.put('/api/categories/:id', controller.updateCat);
routeCat.delete('/api/categories/:id', controller.deleteCat);


module.exports = routeCat