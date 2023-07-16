import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import User from "../models/User.js";
// import Transaction from "../models/Transaction.js";
// import getCountryIso3 from "country-iso-2-to-3";

//exports product+stat json
//thse are very slow; solved by using agreged function {similar to joins}
export const getProducts = async (req, res) => {
    try {
        //store all products json 
        const products = await Product.find();

        //returns combined porduct+stats json array
        const productsWithStats = await Promise.all(
            products.map(async (product) => {
                const stat = await ProductStat.find({
                    productId: product._id,
                });
                return {
                    ...product._doc, //set by mongoDB
                    stat,
                };
            })
        );

        res.status(200).json(productsWithStats);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//exports user without password json 
export const getCustomers = async (req, res) => {
    try {
        const customers = await User.find({ role: "user" }).select("-password");
        res.status(200).json(customers);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
