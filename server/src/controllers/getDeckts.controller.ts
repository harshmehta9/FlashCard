import express, {Request, Response} from "express";
import Deck from "../models/deck";
const app = express();
app.use(express.json());


const getDeck = async(req: Request, res: Response) => {
    try {
        const decks = await Deck.find();
        res.status(200).json(decks)
    } catch (error) {
        console.log(error)
    }
}

export default getDeck;