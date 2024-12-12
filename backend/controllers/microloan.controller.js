import { Microloan } from "../models/microloan.model.js";
export const getMicroloan = async (req, res) => {
    try {
        const microloan = await Microloan.find();
        res.status(200).json(microloan);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving courses', error });
    }
};