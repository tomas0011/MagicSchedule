const S = require('sequelize').DataTypes;

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('horary', {
        startTime: {
            type: S.TEXT,
            allowNull: false,
        },
        endTime: {
            type: S.TEXT,
            allowNull: false,
        },
        task: {
            type: S.STRING,
            allowNull: false,
        },
    });
};