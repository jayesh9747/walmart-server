const { required } = require('joi');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
        accountType: {
            type: String,
            enum: ["DC_managers", "Store_managers", "Drivers"],
            required: true,
        },
        // storeId: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: function () {
        //         if (this.accountType === 'Store_managers') {
        //             return 'Store';
        //         } else if (this.accountType === 'DC_managers') {
        //             return 'DistributionCenter';
        //         }
        //         return null;
        //     },
        //     required: function () {
        //         return this.accountType === 'Store_managers' || this.accountType === 'DC_managers';
        //     }
        // },
        active: {
            type: Boolean,
            default: true,
        },
        approved: {
            type: Boolean,
            default: true,
        },
        additionalDetails: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Profile",
        },
        token: {
            type: String,
        },
        resetPasswordExpires: {
            type: Date,
        },
        image: {
            type: String,
        },
        platform: {
            type: String,
            enum: ["web", "android", "ios"],
            required: true
        }
    },
    { timestamps: true }
)
const User = mongoose.model('user', UserSchema);

module.exports = User;