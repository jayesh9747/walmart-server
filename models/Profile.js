const mongoose = require("mongoose");


const profileSchema = new mongoose.Schema({
    gender: {
        type: String,
    },
    dateOfBirth: {
        type: String,
    },
    about: {
        type: String,
        trim: true,
    },
    contactNumber: {
        type: Number,
        trim: true,
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    address: {
        city: {
            type: String,
            trim: true,
        },
        state: {
            type: String,
            trim: true,
        },
        postalCode: {
            type: String,
            trim: true,
        },
        country: {
            type: String,
            trim: true,
        },
    },
    vehicleDetails: {
        make: {
            type: String, // FORD
            trim: true,
        },
        model: {
            type: String,
            trim: true
        },
        capacity: {
            type: Number,
        },
        licenseNumber: {
            type: "String",
            unique: true,
            trim: true
        }
    },
    experienceYears: {
        type: Number,
    },
    storeId: {
        type: mongoose.Types.ObjectId,
        ref: "Store"
    }
});


module.exports = mongoose.model("Profile", profileSchema);