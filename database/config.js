const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.DB_CONN);

        console.log('DB Online');
    } catch (error) {
        console.error(error);
        throw new Error ('Error when starting database. Check logs')
    }
}

module.exports = {
    dbConnection
}