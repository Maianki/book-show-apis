const express = require('express');
const { connectToDB } = require('./configs/mysqldb');

const app = express();

require('dotenv').config();

app.listen(process.env.PORT || 3000, async () => {
    await connectToDB();
});
