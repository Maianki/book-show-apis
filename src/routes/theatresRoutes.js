const express = require('express');
const bodyParser = require('body-parser');
const theatreRoutes = express.Router();
const Theatre = require('../models/theatres');
const Movie = require('../models/movies');
const ShowTime = require('../models/showtimes');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../configs/mysqldb');

theatreRoutes.use(bodyParser.urlencoded({ extended: false }));
theatreRoutes.use(bodyParser.json());

theatreRoutes.get('/theatres', (req, res) => {
    let city = req.query.city;
    if (city) {
        (async () => {
            try {
                const theatres = await Theatre.findAll({
                    attributes: [
                        'theatre_id',
                        'theatre_name',
                        'capacity',
                        'location',
                    ],
                    where: {
                        location: city,
                    },
                });

                if (theatres.length > 0) {
                    res.status(200).json({
                        statusCode: 200,
                        data: theatres,
                    });
                } else {
                    res.status(200).json({
                        statusCode: 200,
                        data: theatres,
                        message: 'No records found!',
                    });
                }
            } catch (err) {
                res.status(400).json({
                    statusCode: 400,
                    message: 'Internal server error!',
                });
            }
        })();
    } else {
        (async () => {
            try {
                const theatres = await Theatre.findAll({
                    attributes: [
                        'theatre_id',
                        'theatre_name',
                        'capacity',
                        'location',
                    ],
                });

                if (theatres.length > 0) {
                    res.status(200).json({
                        statusCode: 200,
                        data: theatres,
                    });
                } else {
                    res.status(200).json({
                        statusCode: 200,
                        data: theatres,
                        message: 'No records found!',
                    });
                }
            } catch (err) {
                res.status(500).json({
                    statusCode: 500,
                    message: 'Internal server error!',
                });
            }
        })();
    }
});

theatreRoutes.get('/theatres/:theatreId/movies', (req, res) => {
    let date = req.query.date;
    let theatreId = req.params.theatreId;

    const isValidDate = (dateString) => {
        const date = new Date(dateString);
        return !isNaN(date) && date instanceof Date;
    };

    if (!isValidDate(date)) {
        return res.status(500).json({
            statusCode: 500,
            message: 'Date is not valid format!',
        });
    }

    if (isValidDate(date) && !isNaN(theatreId)) {
        try {
            (async () => {
                const movies = await sequelize.query(
                    `SELECT m.movie_name, m.genre, s.showtime_start, s.showtime_end from showtimes s INNER JOIN movies m ON s.movie_id=m.movie_id 
                WHERE theatre_id = ${theatreId} AND show_date = "${date}"`,
                    {
                        type: QueryTypes.SELECT,
                    }
                );

                res.status(200).json({
                    statusCode: 200,
                    data: movies,
                });
            })();
        } catch (err) {
            res.status(500).json({
                statusCode: 500,
                message: 'Internal server error!',
            });
        }
    } else {
        res.status(500).json({
            statusCode: 500,
            message: 'Date or theatre ID is missing!',
        });
    }
});

module.exports = theatreRoutes;
