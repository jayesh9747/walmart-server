const express = require('express');
const router = express.Router();

const endpoints = {
    ACCEPT_REJECT_DELIVERY: '/driver/:driverId/delivery/:deliveryId/respond',
    GET_DELIVERY_DETAILS: '/driver/:driverId/delivery/:deliveryId/details',
    TRACK_DELIVERY_POINTS: '/driver/:driverId/delivery/:deliveryId/track',
    CONFIRM_ARRIVAL_CHECKPOINT : "/driver/:driverId/delivery/:deliveryId/checkpoint/:pointId/arrive",
    SCAN_QR : "/driver/:drziverId/delivery/:deliveryId/checkpoint/:pointId/scan",
};

router.post('/your-endpoint',);

module.exports = router;