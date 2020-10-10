const S = require('sequelize').DataTypes;

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('user', {
        name: {
            type: S.STRING,
            allowNull: false,
        },
        surname: {
            type: S.STRING,
            allowNull: false,
        },
        username: {
            type: S.STRING,
            unique: true,
            allowNull: false,
        },
        salt: {
            type: S.STRING,
            allowNull: false,
        },
        password: {
            type: S.STRING,
            allowNull: false,
        },
    });
};