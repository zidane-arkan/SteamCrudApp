import express from "express";
import { getAllTransaksi, getSingleTransaksi, addTransaksi, updateTransaksi, deleteTransaksi } from '../controller/transaksi.js';

const router = express.Router();

//Get All Games
router.get('/', getAllTransaksi);
//Create New Game
router.post('/', addTransaksi);
//Get Single Games
router.get('/:id', getSingleTransaksi);
//Update Game
router.patch('/:id', updateTransaksi);
//Delete Single Game
router.delete('/:id', deleteTransaksi);

export default router;