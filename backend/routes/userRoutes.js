import express from "express";
import { getAllUser, getSingleUser, addUser, updateUser, deleteUser } from '../controller/user.js';

const router = express.Router();

//Get All Games
router.get('/', getAllUser);
//Create New Game
router.post('/', addUser);
//Get Single Games
router.get('/:id', getSingleUser);
//Update Game
router.patch('/:id', updateUser);
//Delete Single Game
router.delete('/:id', deleteUser);

export default router;