import { connect } from "http2";
import mongoose from "mongoose";
import { Document, Schema, model } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const ObjectId = mongoose.Types.ObjectId;

interface IDeck extends Document {
    title: string,
    cards: string[]
}

const DeckSchmea = new Schema<IDeck>({
    title: {type: String, required: true},
    cards: [String]
})

const Deck = model<IDeck>("Deck", DeckSchmea);


export default Deck;

