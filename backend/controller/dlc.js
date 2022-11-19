// import express from 'express';
import Dlc from '../models/dlcModels.js';

//Get All DLC
const getAllDlc = async (req, res) => {
    try {
        const getAllDlc = await Dlc.findAll({});
        res.status(200).json(getAllDlc);
    } catch (error) {
        res.json(404).json({ message: error.message });
    }
};
//Add Dlc
const addDlc = async (req, res) => {
    const { nama_dlc, tanggal_pembaruan } = req.body;
    try {
        await Dlc.create({
            nama_dlc, tanggal_pembaruan
        });
        res.status(200).json({ message: "New Dlc Created" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
//Get Single DLC
const getSingleDlc = async (req, res) => {
    try {
        const { id } = req.params;
        const getSingleDlc = await Dlc.findAll({
            where: {
                dlc_id: id
            }
        });
        // if (getSingleDlc) { }
        res.status(200).json(getSingleDlc[0]);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
//Update DLC
const updateDlc = async (req, res) => {
    try {
        const { id } = req.params;
        await Dlc.update(req.body, {
            where: {
                dlc_id: id
            }
        });
        res.status(200).json({ message: "Dlc Updated " });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
//Delete DLC
const deleteDlc = async (req, res) => {
    try {
        const { id } = req.params;
        await Dlc.destroy({
            where: {
                dlc_id: id
            }
        });
        res.status(200).json({ message: "Dlc Deleted " });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export { getAllDlc, addDlc, getSingleDlc, updateDlc, deleteDlc };