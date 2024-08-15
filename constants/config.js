require("dotenv").config();

const CONFIG = {
    DB: {
        DB_HOST: process.env.MONGODB_URL,
        DB_NAME: process.env.DB_NAME,
    },
    HOST: {
        web: process.env.CLIENT,
        android: process.env.CREATION_PORTAL_URL,
    },
    APIS: {
        auth: "/api/v1/auth",
        profile: "/api/v1/profile",
        inventory: "api/v1/inventory",
        qr_code: "/api/v1/qr",
        delivery: '/api/v1/delivery',
        trailer: '/api/v1/trailer',
        route: '/api/v1/route',
        distribution_center: '/api/v1/distribution-center',
        store: '/api/v1/store',
        driver: '/api/v1/driver'
    },
    KEYS: {
        CLOUDINARY: {
            CLOUD_NAME: process.env.CLOUD_NAME,
            API_KEY: process.env.CLOUDINARY_API_KEY,
            API_SECRET: process.env.CLOUDINARY_API_SECRET
        },
        NODEMAILER: {
            MAIL_HOST: process.env.MAIL_HOST,
            MAIL_USER: process.env.MAIL_USER,
            HOST_PASS: process.env.MAIL_PASS
        }

    },
    JWT: {
        TOKEN: process.env.JWT_SECRET
    },
    ACCOUNT_TYPE: {
        STORE: "Store_managers",
        DISTRIBUTION_CENTER: "DC_managers",
        DRIVER: "Drivers"
    },
    STORE_TYPE :{
        STORE :"Store",
        DISTRIBUTION_CENTER : "Distribution Center"
    }
};

module.exports = {
    CONFIG,
};
