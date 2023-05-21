const { sequelize } = require('../configs/mysqldb');
const Movie = require('../models/movies');
const Theatre = require('../models/theatres');
const ShowTime = require('../models/showtimes');

async function insertDummyData() {
    try {
        await sequelize.sync({ alter: true }); // This will recreate the tables

        await Theatre.bulkCreate([
            {
                theatre_id: 1,
                theatre_name: 'PVR Cinemas',
                location: 'Mumbai',
                capacity: 500,
            },
            {
                theatre_id: 2,
                theatre_name: 'INOX',
                location: 'Delhi',
                capacity: 400,
            },
            {
                theatre_id: 3,
                theatre_name: 'Cinepolis',
                location: 'Chennai',
                capacity: 300,
            },
            {
                theatre_id: 4,
                theatre_name: 'Fun Cinemas',
                location: 'Kolkata',
                capacity: 200,
            },
            {
                theatre_id: 5,
                theatre_name: 'Wave Cinemas',
                location: 'Hyderabad',
                capacity: 100,
            },
        ]);

        await Movie.bulkCreate([
            {
                movie_id: 1,
                movie_name: 'Sholay',
                description:
                    'A classic Bollywood action film about two friends who set out to avenge the death of a friend.',
                genre: 'Action',
            },
            {
                movie_id: 2,
                movie_name: 'Dilwale Dulhania Le Jayenge',
                description:
                    'A romantic comedy about two young people who fall in love while on a trip to Europe.',
                genre: 'Romance',
            },
            {
                movie_id: 3,
                movie_name: 'Bahubali: The Beginning',
                description:
                    'A historical epic about a warrior king who sets out to avenge the death of his father.',
                genre: 'Action',
            },
            {
                movie_id: 4,
                movie_name: '3 Idiots',
                description:
                    'A coming-of-age comedy-drama about three friends who navigate their way through college and life.',
                genre: 'Comedy',
            },
            {
                movie_id: 5,
                movie_name: 'Kabhi Khushi Kabhie Gham',
                description:
                    'A family drama about two estranged brothers who come together after many years.',
                genre: 'Drama',
            },
        ]);

        await ShowTime.bulkCreate([
            {
                showtime_id: 1,
                show_date: '2023-05-22T10:00:00',
                showtime_start: '10:00:00',
                showtime_end: '12:00:00',
                movie_id: 1,
                theatre_id: 1,
            },
            {
                showtime_id: 2,
                show_date: '2023-05-22T14:00:00',
                showtime_start: '14:00:00',
                showtime_end: '16:00:00',
                movie_id: 2,
                theatre_id: 2,
            },
            {
                showtime_id: 3,
                show_date: '2023-05-22T18:00:00',
                showtime_start: '18:00:00',
                showtime_end: '20:00:00',
                movie_id: 3,
                theatre_id: 3,
            },
            {
                showtime_id: 4,
                show_date: '2023-05-23T10:00:00',
                showtime_start: '10:00:00',
                showtime_end: '12:00:00',
                movie_id: 4,
                theatre_id: 4,
            },
            {
                showtime_id: 5,
                show_date: '2023-05-23T14:00:00',
                showtime_start: '14:00:00',
                showtime_end: '16:00:00',
                movie_id: 5,
                theatre_id: 5,
            },
            {
                showtime_id: 6,
                show_date: '2023-05-24T10:00:00',
                showtime_start: '10:00:00',
                showtime_end: '12:00:00',
                movie_id: 1,
                theatre_id: 1,
            },
            {
                showtime_id: 7,
                show_date: '2023-05-24T14:00:00',
                showtime_start: '14:00:00',
                showtime_end: '16:00:00',
                movie_id: 2,
                theatre_id: 2,
            },
            {
                showtime_id: 8,
                show_date: '2023-05-24T18:00:00',
                showtime_start: '18:00:00',
                showtime_end: '20:00:00',
                movie_id: 3,
                theatre_id: 3,
            },
            {
                showtime_id: 9,
                show_date: '2023-05-25T10:00:00',
                showtime_start: '10:00:00',
                showtime_end: '12:00:00',
                movie_id: 4,
                theatre_id: 4,
            },
        ]);

        // eslint-disable-next-line no-console
        console.log('Dummy data inserted successfully.');
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error inserting dummy data:', error);
    }
}

insertDummyData();
