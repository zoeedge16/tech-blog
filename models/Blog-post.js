const { Model, DataTypes } = require('sequilize');
const sequilize = require('../config/connection');

class Post extends Model {};

Post.init(
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
        modelName: 'post',
    }
)

module.exports = Post;