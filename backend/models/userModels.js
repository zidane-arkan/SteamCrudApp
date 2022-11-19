import { Sequelize } from 'sequelize';
import db from '../database/database.js';

const { DataTypes } = Sequelize;

const User = db.define('users', {
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
});

export default User;