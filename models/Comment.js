const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Post = require('./Post');

class Comment extends Model {};

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        text: {
           type: DataTypes.TEXT,
           allowNull: false,
        },
        creator: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dateCreated: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        postId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Post,
                key: 'id'
            }

        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'comment',
    }
)

module.exports = Comment;