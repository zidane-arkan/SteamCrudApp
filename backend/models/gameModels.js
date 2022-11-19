import { Sequelize } from 'sequelize';
import db from '../database/database.js';

const { DataTypes } = Sequelize;

const Game = db.define('games', {
    game_id: {
        type: DataTypes.INTEGER(6),
        primaryKey: true
    },
    nama_game: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    harga: {
        type: DataTypes.INTEGER(6),
        allowNull: false
    },
    ukuran: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    tipe: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    pengembang_id: {
        type: DataTypes.INTEGER(6),
        references: {
            model: 'pengembang',
            key: 'pengembang_id'
        },
        allowNull: false,
    },
    dlc_id: {
        type: DataTypes.INTEGER(6),
        references: {
            model: 'dlc',
            key: 'dlc_id'
        },
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default Game;