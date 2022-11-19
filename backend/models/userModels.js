import { Sequelize } from 'sequelize';
import db from '../database/database.js';

const { DataTypes } = Sequelize;

const User = db.define('users', {
    user_id: {
        type: DataTypes.INTEGER(6),
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    balance: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
}, {
    freezeTableName: true,
    timestamps: false
});

export default User;