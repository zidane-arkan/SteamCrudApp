import User from '../models/userModels.js';

//Get All users
const getAllUser = async (req, res) => {
    try {
        const alluser = await User.findAll({});
        res.status(200).json(alluser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
//Get Single user
const getSingleUser = async (req, res) => {
    try {
        const { id } = req.params;
        const singleuser = await User.findAll({
            where: {
                user_id: id
            }
        });
        res.status(200).json(singleuser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
//Add New user
const addUser = async (req, res) => {
    try {
        const { user_id, username, password, email, balance } = req.body;
        await User.create({
            user_id, username, password, email, balance
        });
        res.status(200).json({ message: "Add New user" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
//Update user
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        await User.update(req.body, {
            where: {
                user_id: id
            }
        });
        res.status(200).json({ message: "Updated user" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
//Delete user
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await User.destroy({
            where: {
                user_id: id
            }
        });
        res.status(200).json({ message: "User Delete Complete" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export { getAllUser, getSingleUser, addUser, updateUser, deleteUser };