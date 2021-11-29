const express = require('express');
const routeFam = express.Router()

const controller = require('../controller/controller');

// API
routeFam.post('/api/families', controller.createFam);
routeFam.get('/api/families', controller.findFam);
routeFam.put('/api/families/:id', controller.updateFam);
routeFam.delete('/api/families/:id', controller.deleteFam);


module.exports = routeFam