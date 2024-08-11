//  GET stores 
const express = require('express');
const router = express.Router();

// store panel

const { fetch_stores } = require('../controllers/store')

const endpoints = {
    GET_STORES: '/stores',
    GET_INVENTORY: '/delivery/:deliveryId/assign',
    GET_DELIVERY_DETAILS: '/delivery/:deliveryId',  // sort : on going,completed
};


router.post(endpoints.GET_STORES, fetch_stores);


module.exports = router;
