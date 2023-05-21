const { sequelize } = require('../configs/mysqldb');
const DataTypes = require('sequelize');

const Theatre = sequelize.define('theatre', {
    theatre_id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    theatre_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    capacity: {
        type: DataTypes.INTEGER(100),
    },
});

(async () => {
    await Theatre.sync({ alter: true });
})();

module.exports = Theatre;
