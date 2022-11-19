import { Sequelize } from 'sequelize';
import db from '../database/database.js';

const { DataTypes } = Sequelize;

const Pengembang = db.define('pengembang', {
    pengembang_id: {
        type: DataTypes.INTEGER(6),
        primaryKey: true
    },
    nama_pengembang: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    tanggal_bergabung: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default Pengembang;