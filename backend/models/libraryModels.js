import { Sequelize } from 'sequelize';
import db from '../database/database.js';

const { DataTypes } = Sequelize;

const Library = db.define('library', {
    library_id: {
        type: DataTypes.INTEGER(6),
        primaryKey: true
    },
    nama_game: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    tipe_game: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    game_id: {
        type: DataTypes.INTEGER(6),
        references: {
            model: 'games',
            key: 'game_id'
        },
        allowNull: false,
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default Library;