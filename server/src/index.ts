import express, {Request,Response} from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import Deck from "./models/deck"
import cors from "cors";
import { stringify } from "querystring";
import getDeck from "./controllers/getDeckts.controller";
import createDeck from "./controllers/createDeck.controller";
import deleteDeck from "./controllers/deleteDeck.controller";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.get('/displayDeck', getDeck);
app.delete("/deleteDeck/:id", deleteDeck);
app.post('/createDeck', createDeck);
app.post("/decks/")


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

