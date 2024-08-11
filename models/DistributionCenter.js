const { required } = require("joi");
const mongoose = require("mongoose");

const DistributionCenterSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipCode: { type: String, required: true },
        country: { type: String, required: true }
    },
    storageCapacity: {
        type: Number,
        required: true
    },
    operatingHours: {
        openingTime: { type: String, required: true },
        closingTime: { type: String, required: true }
    },
    contactInfo: {
        managerName: { type: String, required: true },
        managerId: { type: mongoose.Schema.Types.ObjectId, required: true },
        phone: { type: String, required: true },
        email: { type: String, required: true }
    },
    managedProducts: [{
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        stock: { type: Number, required: true }
    }],
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model("DistributionCenter", DistributionCenterSchema)