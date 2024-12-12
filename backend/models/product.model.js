import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      myimages: {
        type: String,
        required: true
      },
      user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true 
      }
}, { timestamps: true });

export const Product = mongoose.model('Product', productSchema);
