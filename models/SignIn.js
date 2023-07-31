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
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'sign-in',
    }
)

module.exports = SignIn;