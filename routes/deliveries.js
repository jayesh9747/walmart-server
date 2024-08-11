const express = require("express")
const router = express.Router();
const Joi = require('joi');
const validateWith = require('../middleware/validation')

const Delivery = require('../controllers/delivery')


const endpoints = {
    AVAILABLE_DELIVERIES :'/deliveries/available'
}


router.post(endpoints.AVAILABLE_DELIVERIES, )



module.exports = router