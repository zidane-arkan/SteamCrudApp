import Transaksi from '../models/transaksiModels.js';


//Get All Transaksis
const getAllTransaksi = async (req, res) => {
    try {
        const allTransaksi = await Transaksi.findAll({});
        res.status(200).json(allTransaksi);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
//Get Single Transaksi
const getSingleTransaksi = async (req, res) => {
    try {
        const { id } = req.params;
        const singleTransaksi = await Transaksi.findAll({
            where: {
                transaksi_id: id
            }
        });
        res.status(200).json(singleTransaksi);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
//Add New Transaksi
const addTransaksi = async (req, res) => {
    try {
        const { transaksi_id, tanggal_transaksi, tipe_transaksi, game_id, user_id } = req.body;
        await Transaksi.create({
            transaksi_id, tanggal_transaksi, tipe_transaksi, game_id, user_id
        });
        res.status(200).json({ message: "Add New Transaksi" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
//Update Transaksi
const updateTransaksi = async (req, res) => {
    try {
        const { id } = req.params;
        await Transaksi.update(req.body, {
            where: {
                transaksi_id: id
            }
        });
        res.status(200).json({ message: "Updated Transaksi" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
//Delete Transaksi
const deleteTransaksi = async (req, res) => {
    try {
        const { id } = req.params;
        await Transaksi.destroy({
            where: {
                transaksi_id: id
            }
        });
        res.status(200).json({ message: "Transaksi Delete Complete" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export { getAllTransaksi, getSingleTransaksi, addTransaksi, updateTransaksi, deleteTransaksi };