const { sequelize } = require('../configs/mysqldb');
const DataTypes = require('sequelize');
const Movie = require('./movies');
const Theatre = require('./theatres');

const ShowTime = sequelize.define('showtime', {
    showtime_id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    show_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    showtime_start: {
        type: DataTypes.TIME,
        allowNull: true,
    },
    showtime_end: {
        type: DataTypes.TIME,
        allowNull: true,
    },
});

// Define the foreign key relationships
ShowTime.belongsTo(Movie, { foreignKey: 'movie_id' });
ShowTime.belongsTo(Theatre, { foreignKey: 'theatre_id' });

(async () => {
    await ShowTime.sync({ force: true });
})();

module.exports = ShowTime;
