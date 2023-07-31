const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SignUp extends Model {};

SignUp.init(
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
        modelName: 'sign-up',
    }
)

module.exports = SignUp;