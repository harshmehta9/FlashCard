import express, {Request, Response} from "express";
import Deck from "../models/deck";
const app = express();
app.use(express.json());

const createDeck = async(req: Request, res: Response) => {
    try{
    const title = req.body;
    const newTitle =   new Deck(title);
    await newTitle.save();
    res.status(200).json(title)
    }catch{
        res.status(500).json({message: "Error Creating Deck"});
    }
}

export default createDeck;