const { Model, DataTypes } = require('sequilize');
const sequilize = require('../config/connection');

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
        sequilize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'sign-in',
    }
)

module.exports = SignIn;