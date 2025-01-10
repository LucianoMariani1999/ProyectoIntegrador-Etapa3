import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoutes.js";
import cors from "cors";


const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;

mongoose
        .connect(MONGOURL)
        .then(() => {
            console.log("La base de datos ha sido conectada.");
            app.listen(PORT, () => {
                console.log(`Servidor corriendo en el puerto :${PORT}`);
            });
        })
        .catch((error) => console.log(error));

app.use("/api", route);
     