const { Model, DataTypes } = require('sequilize');
const sequilize = require('../config/connection');

class Comment extends Model {};

Comment.init(
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
        modelName: 'comment',
    }
)

module.exports = Comment;