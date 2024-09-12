import {Request, Response} from "express";
import Deck from "../models/deck";

const createCardForDeck = async (req: Request, res: Response) => {
    const {id} = req.params;
    const deck = await Deck.findById(id);
    if(!deck) return res.status(400).json({message: "No deck is found"});
    const cardText = req.body.cardText;
    deck.cards.push(cardText);
    await deck.save();
    res.status(200).json(deck);
}

export default createCardForDeck;
