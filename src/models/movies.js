const { sequelize } = require('../configs/mysqldb');
const DataTypes = require('sequelize');

const Movie = sequelize.define('movie', {
    movie_id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    movie_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(1000),
    },
    genre: {
        type: DataTypes.STRING(100),
    },
});

(async () => {
    await Movie.sync({ alter: true });
})();

module.exports = Movie;
