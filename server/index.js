import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";
import path from "path";


//data db imports
import User from "./models/User.js"; //mongoose schema
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
import Transaction from "./models/Transaction.js";
import OverallStat from "./models/OverallStat.js";
import { dataUser, dataProduct, dataProductStat, dataTransaction, dataOverallStat } from './data/index.js' //db


// CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());

app.use(
    helmet.crossOriginResourcePolicy({
        policy: "cross-origin",
    })
);
app.use(morgan(" common "));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


/* ROUTES */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sale", salesRoutes);

// Connecting frontend
// Serve static files from the React app in production
app.use(express.static(path.join(__dirname, './client/build')));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"), function (err) {
        res.status(500).send(err);
    })
});


/* MONGOOSE SETUP*/
// 
const PORT = process.env.PORT || 80;
mongoose
    .connect("mongodb+srv://nakul:qwerty123@foodd.5qdwl8g.mongodb.net/mern_dashboard?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {

        app.listen(PORT, () => console.log(`Connected to MongoDB... ${PORT}`))
        // data adds only one time
        // Product.insertMany(dataProduct);
        // ProductStat.insertMany(dataProductStat)
        // User.insertMany(dataUser);
        // Transaction.insertMany(dataTransaction);
        // OverallStat.insertMany(dataOverallStat)
    })
    .catch((err) => console.error("Could not connect to MongoDB...", err));
