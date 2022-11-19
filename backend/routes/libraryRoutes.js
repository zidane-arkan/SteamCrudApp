import express from 'express';
import { getAllLibrary, getSingleLibrary, addLibrary, updateLibrary, deleteLibrary } from '../controller/library.js';


const router = express.Router();

//Get All Games
router.get('/', getAllLibrary);
//Create New Game
router.post('/', addLibrary);
//Get Single Games
router.get('/:id', getSingleLibrary);
//Update Game
router.patch('/:id', updateLibrary);
//Delete Single Game
router.delete('/:id', deleteLibrary);

export default router;