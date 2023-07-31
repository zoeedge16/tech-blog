const { Model, DataTypes } = require('sequilize');
const sequilize = require('../config/connection');

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
        sequilize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'sign-up',
    }
)

module.exports = SignUp;