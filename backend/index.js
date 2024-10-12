import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from "./config/db.js";

import router from "./routes/product.routes.js";


dotenv.config();

const app = express();
connectDB(process.env.MONGO_URL);
app.use(express.json());

//
app.use('/api/products', router)
//create route

app.listen(process.env.PORT, () => {
    console.log(`Listening on port http://localhost:${process.env.PORT}`);
})
