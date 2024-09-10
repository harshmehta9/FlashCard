import express, {Request, Response} from "express";
import Deck from "../models/deck";
import { create } from "domain";
const app = express();
app.use(express.json());


const deleteDeck = async(req: Request, res: Response)=> {
    try {
        const {id} = req.params;
        console.log(id)
        const deletedDeck = await Deck.findByIdAndDelete(id);
        res.json(deletedDeck);
    } catch (error) {
        console.log(error)
    }
}

export default deleteDeck;