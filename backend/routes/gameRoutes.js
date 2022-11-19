import express from 'express';
import { getAllGames, getSingleGame, addGame, updateGame, deleteGame } from '../controller/game.js';

const router = express.Router();

//Get All Games
router.get('/', getAllGames);
//Create New Game
router.post('/', addGame);
//Get Single Games
router.get('/:id', getSingleGame);
//Update Game
router.patch('/:id', updateGame);
//Delete Single Game
router.delete('/:id', deleteGame);

export default router;