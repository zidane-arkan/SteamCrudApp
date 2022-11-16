import { Sequelize } from 'sequelize';
import db from '../database/database.js';

const { DataTypes } = Sequelize;

const Dlc = db.define('dlc', {
    nama_dlc: {
        type: DataTypes.STRING(25), allowNull: false
    },
    tanggal_pembaruan: {
        type: DataTypes.DATEONLY, allowNull: false
    },
}, {
    freezeTableName: true
});

export default Dlc;