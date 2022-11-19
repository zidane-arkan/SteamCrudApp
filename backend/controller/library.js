import Library from '../models/libraryModels.js';

//Get All Library Game
const getAllLibrary = async (req, res) => {
    try {
        const getLibrary = await Library.findAll({});
        res.status(200).json(getLibrary);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
//Get Single Library Game
const getSingleLibrary = async (req, res) => {
    try {
        const { id } = req.params;
        const singleLibrary = await Library.findAll({
            where: {
                library_id: id
            }
        });
        res.status(200).json(singleLibrary);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
//Add new Library Game
const addLibrary = async (req, res) => {
    try {
        const { nama_game, tipe_game, game_id } = req.body;
        await Library.create({
            nama_game, tipe_game, game_id
        });
        res.status(200).json({ message: "Add New Library" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
//Update Library Game
const updateLibrary = async (req, res) => {
    try {
        const { id } = req.params;
        await Library.update(req.body, {
            where: {
                library_id: id
            }
        });
        res.status(200).json({ message: "Update Done" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
//Delete Library Game
const deleteLibrary = async (req, res) => {
    try {
        const { id } = req.params;
        await Library.destroy({
            where: {
                library_id: id
            }
        });
        res.status(200).json({ message: "Delete Complete" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export {
    getAllLibrary, getSingleLibrary, addLibrary, updateLibrary, deleteLibrary
};