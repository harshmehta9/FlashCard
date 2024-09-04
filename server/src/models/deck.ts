import { connect } from "http2";
import mongoose from "mongoose";
import { Document, Schema, model } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const ObjectId = mongoose.Types.ObjectId;

interface IDeck extends Document {
    title: string
}

const DeckSchme = new Schema<IDeck>({
    title: {type: String, required: true}
})

const Deck = model<IDeck>("Deck", DeckSchme);


export default Deck;

