import {Request, Response} from "express";
import Deck from "../models/deck";

const deleteCardForDeck = async(req: Request, res: Response) => {
    const {id} = req.params;
    const cardToBeDeleted = req.body.cardText;
    const deck = await Deck.findById(id);
    const cardIndex = deck?.cards.indexOf(cardToBeDeleted);
    console.log(cardIndex);

}

export default deleteCardForDeck;