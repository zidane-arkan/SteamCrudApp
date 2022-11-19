import Game from '../models/gameModels.js';

//Get All Games
const getAllGames = async (req, res) => {
    try {
        const getGames = await Game.findAll({});
        res.status(200).json(getGames);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
//Get Single Game
const getSingleGame = async (req, res) => {
    try {
        const { id } = req.params;
        const singleGame = await Game.findAll({
            where: {
                game_id: id
            }
        });
        res.status(200).json(singleGame);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
//Add New Game
const addGame = async (req, res) => {
    try {
        const { nama_game, harga, ukuran, tipe, pengembang_id, dlc_id } = req.body;
        await Game.create({
            nama_game, harga, ukuran, tipe, pengembang_id, dlc_id
        });
        res.status(200).json({ message: "Add New Game" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
//Update Game
const updateGame = async (req, res) => {
    try {
        const { id } = req.params;
        await Game.update(req.body, {
            where: {
                game_id: id
            }
        });
        res.status(200).json({ message: "Updated Game" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
//Delete Game
const deleteGame = async (req, res) => {
    try {
        const { id } = req.params;
        await Game.destroy({
            where: {
                game_id: id
            }
        });
        res.status(200).json({ message: "Game Delete Complete" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export { getAllGames, getSingleGame, addGame, updateGame, deleteGame };
