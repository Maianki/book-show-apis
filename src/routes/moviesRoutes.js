const express = require('express');
const bodyParser = require('body-parser');
const moviesRoutes = express.Router();

moviesRoutes.use(bodyParser.urlencoded({ extended: false }));
moviesRoutes.use(bodyParser.json());

moviesRoutes.get('/movies', (req, res) => {
    res.json({
        name: 'Ankit',
    });
});

module.exports = moviesRoutes;
