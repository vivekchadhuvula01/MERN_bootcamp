import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getAllProducts = async (req, res) => {
    try{
        const product = await Product.find({})
        res.status(200).json(product);
    }
    catch (error){
        console.log(error)
        res.status(500).json({message:"Error in fetching the data"})
    }
}

export const addProduct = async (req, res) => {
    const product = req.body; //user will send this data
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({message: 'Please fill all fields!'});
    }
    const newProduct = new Product(product);
    try{
        await newProduct.save();
        res.status(200).json({message: 'Product Added!'});
    }
    catch (error){
        res.status(500).json({message:"Error in saving the data"})
        console.log(error)
    }

}

export const updateProduct = async (req, res) => {
    const {id} = req.params;
    const product = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(500).json({message: 'Please enter a valid Id!'});
        console.log("enter a valid Id!");
    }
    try {
        const updatedData = await Product.findByIdAndUpdate(id, product, {new: true})
        res.status(200).json(updatedData);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error in updating the data"})
    }
}

export const deleteProduct = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(500).json({message: 'Please enter a valid Id!'});
        console.log("enter a valid Id!");
    }
    try{
        await Product.findByIdAndDelete(id)
        res.status(200).json({message: 'Product Removed!'});
    }
    catch (error){
        console.log(error)
        res.status(500).json({message:"Error in deleting the data"})
    }
}