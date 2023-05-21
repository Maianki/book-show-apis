require('dotenv').config();

module.exports = {
    development: {
        username: process.env.USER,
        password: process.env.SQL_PASS,
        database: 'bookmyshow',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
    production: {
        username: process.env.USER,
        password: process.env.SQL_PASS,
        database: 'bookmyshow',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
};
