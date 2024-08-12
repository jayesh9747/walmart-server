const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    storeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Store',
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    salesQuantity: {
        type: Number,
        required: true
    },
    supplier: {
        type: String,
        required: false
    },
    restockDate: {
        type: Date,
        required: false
    },
    status: {
        type: String,
        enum: ['In Stock', 'Out of Stock', 'Discontinued'],
        default: 'In Stock'
    }
}, {
    timestamps: true
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;
