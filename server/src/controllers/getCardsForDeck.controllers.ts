import express, {Request, Response} from "express";
import Deck from "../models/deck";
const app = express();
app.use(express.json());

const getCardsForDeck = async (req: Request, res: Response) => {
    const {id} = req.params;
    console.log(id);
    const currentDeck = await Deck.findById(id);
    if(!currentDeck) return res.status(400).json("Deck Not Found");
    const DeckCards = currentDeck?.cards;
    res.send(DeckCards);
}

export default getCardsForDeck;