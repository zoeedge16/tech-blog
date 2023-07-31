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
        modelName: 'signup',
    }
)

module.exports = SignUp;