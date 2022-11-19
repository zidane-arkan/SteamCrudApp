import { Sequelize } from 'sequelize';
import db from '../database/database.js';

const { DataTypes } = Sequelize;

const Transaksi = db.define('transaksi', {
    transaksi_id: {
        type: DataTypes.INTEGER(6),
        primaryKey: true
    },
    tanggal_transaksi: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    tipe_transaksi: {
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
    },
    user_id: {
        type: DataTypes.INTEGER(6),
        references: {
            model: 'users',
            key: 'user_id'
        },
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default Transaksi;