const S = require('sequelize').DataTypes;

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('todo', {
        name: {
            type: S.STRING,
            allowNull: false,
        },
        description: {
            type: S.STRING,
            allowNull: false,
        },
    });
};