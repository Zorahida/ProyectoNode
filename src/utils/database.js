const dotenv = require ('dotenv');

const mongoose = require('mongoose');

dotenv.config();

//const DB_URL = process.env.DB_URL;

const connect = async () => {
    try {
        const db = await mongoose.connect(process.env.DB_URL);
        //console.log(process.env.DB_URL);
        const { name, host } = db.connection;
        console.log(`Connected to ${name} in host:${host}`);

    } catch (error) {
        console.log(`Error connecting to DDBB ${error}`);
    }
};

module.exports = { connect };