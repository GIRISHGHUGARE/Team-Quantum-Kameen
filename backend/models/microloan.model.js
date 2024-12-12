import mongoose from "mongoose";

const microloanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    description: {
        type: String,
        required: true 
    },
    price: {
        type: Number,
        required: true 
    },
    createdAt: {
        type: Date,
        default: Date.now 
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

export const Microloan = mongoose.model('Microloan', microloanSchema);