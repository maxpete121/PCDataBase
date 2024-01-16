import { Schema } from "mongoose";





export const PcSchema = new Schema({
    price: {type: Number, required: true},
    parts: {type: Schema.Types.ObjectId, required: true},
    creator: {type: Schema.Types.ObjectId, required: true}
},{toJSON: {virtuals: true}})