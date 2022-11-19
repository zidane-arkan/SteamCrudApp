import express from 'express';
import { getAllPengembang, getSinglePengembang, addPengembang, updatePengembang, deletePengembang } from '../controller/pengembang.js';

const router = express.Router();

//Get All Games
router.get('/', getAllPengembang);
//Create New Game
router.post('/', addPengembang);
//Get Single Games
router.get('/:id', getSinglePengembang);
//Update Game
router.patch('/:id', updatePengembang);
//Delete Single Game
router.delete('/:id', deletePengembang);

export default router;