import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name: String,
        price: Number,
        description: String,
        category: String,
        rating: Number,
        supply: Number,
    },
    { timestamps: true } //stores time when product is created
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;