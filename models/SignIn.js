const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SignIn extends Model {};

SignIn.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: DataTypes.STRING,
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'sign-in',
    }
)

module.exports = SignIn;