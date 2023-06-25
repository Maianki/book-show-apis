/* eslint-disable no-console */
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    'bookmyshow',
    process.env.USER,
    process.env.SQL_PASS,
    {
        dialect: 'mysql',
        host: 'localhost',
    }
);

const connectToDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Successfully connected to the database.');
    } catch (error) {
        console.log(error);
    }
};

module.exports = { sequelize, connectToDB };
