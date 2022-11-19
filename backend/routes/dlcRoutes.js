import express from 'express';
import { getAllDlc, addDlc, getSingleDlc, updateDlc, deleteDlc } from '../controller/dlc.js';

const router = express.Router();

//Get All Dlc
router.get('/', getAllDlc);
//Add Dlc       
router.post('/', addDlc);
//Get Single DLC
router.get('/:id', getSingleDlc);
//Update Exist DLC
router.patch('/:id', updateDlc);
//Delete Single DLC
router.delete('/:id', deleteDlc);

export default router;