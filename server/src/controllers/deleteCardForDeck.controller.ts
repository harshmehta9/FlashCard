import {Request, Response} from "express";
import Deck from "../models/deck";

const deleteCardForDeck = async(req: Request, res: Response) => {

  try {
    const { id } = req.params;
    const cardToBeDeleted = req.body;
    // console.log(cardToBeDeleted.cardToBeDeleted.card);

    // Find the deck by ID
    const deck = await Deck.findById(id);

    // If no deck is found, return an error
    if (!deck) {
      return res.status(404).json({ message: "Deck not found" });
    }

    // Find the index of the card to be deleted
    const cardIndex = deck.cards.indexOf(cardToBeDeleted.cardToBeDeleted.card);

    // Check if the cardIndex is valid (not -1)
    if (cardIndex === -1) {
      return res.status(404).json({ message: "Card not found in the deck" });
    }

    // Remove the card from the array using a valid index
    deck.cards.splice(cardIndex, 1);

    // Save the updated deck
    await deck.save();

    // Return the updated deck or success message
    return res.status(200).json({ message: "Card deleted successfully", deck });
  } catch (error) {
    // Handle errors and send a response
    return res.status(500).json({ message: "An error occurred", error });
  }
};


export default deleteCardForDeck;