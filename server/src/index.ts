import express, {Request,Response} from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import Deck from "./models/deck"
dotenv.config();

const app = express();
app.use(express.json());



app.get('/deck', (req: Request, res: Response) => {
    const title = req.body;
})



const mongoURL = process.env.URL as string;
mongoose.connect(mongoURL);
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to MongoDB');
    app.listen(3000, () => {
        console.log("Server is running on 3000🔥")
    })
});

mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected from MongoDB');
});

