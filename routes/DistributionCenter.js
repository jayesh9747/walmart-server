const express = require('express');
const router = express.Router();

// admin panel 

const {
    FetchDriver
} = require('../controllers/driver');

const {
    AssignDelivery,
    Deliveries
} = require('../controllers/distributionCenter');

const endpoints = {
    FetchDriver: '/drivers',
    ASSIGN_DELIVERY: '/delivery/:deliveryId/assign',
    GET_DELIVERY_DETAILS: '/delivery/:deliveryId',  // sort : on going,completed
};

router.post(endpoints.FetchDriver, FetchDriver);

router.post(endpoints.ASSIGN_DELIVERY, AssignDelivery);

router.post(endpoints.GET_DELIVERY_DETAILS ,Deliveries);

module.exports = router;
