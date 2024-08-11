const { required } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const StoreSchema = new Schema({
    name: { type: String },
    location: { type: String },
    squareFeet: { type: Number },
    managerName: { type: String, required: true },
    managerId: { type: mongoose.Schema.Types.ObjectId, required: true },
    openingDate: { type: Date, default: Date.now, },
    isActive: { type: Boolean, default: true },
    type: {
        type: String,
        enum: ['Store', 'FC'],
        default: 'Store'
    }
});


module.exports = mongoose.model('Store', StoreSchema);
