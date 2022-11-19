import Pengembang from '../models/pengembangModels.js';

//Get All Games
const getAllPengembang = async (req, res) => {
    try {
        const getAllPengembang = await Pengembang.findAll({});
        res.status(200).json(getAllPengembang);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
//Get Single Game
const getSinglePengembang = async (req, res) => {
    try {
        const { id } = req.params;
        const singlePengembang = await Pengembang.findAll({
            where: {
                pengembang_id: id
            }
        });
        res.status(200).json(singlePengembang);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
//Add New Game
const addPengembang = async (req, res) => {
    try {
        const { pengembang_id, nama_pengembang, tanggal_bergabung } = req.body;
        await Pengembang.create({
            pengembang_id, nama_pengembang, tanggal_bergabung
        });
        res.status(200).json({ message: "New Pengembang Added" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
//Update Game
const updatePengembang = async (req, res) => {
    try {
        const { id } = req.params;
        await Pengembang.update(req.body, {
            where: {
                pengembang_id: id
            }
        });
        res.status(200).json({ message: "Pengembang Updated " });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
//Delete Game
const deletePengembang = async (req, res) => {
    try {
        const { id } = req.params;
        await Pengembang.destroy({
            where: {
                pengembang_id: id
            }
        });
        res.status(200).json({ message: "Pengembang Deleted " });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export { getAllPengembang, getSinglePengembang, addPengembang, updatePengembang, deletePengembang };