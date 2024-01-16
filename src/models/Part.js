import { Schema } from "mongoose";


export const PartSchema = new Schema({
    type: {type: String, enum: ['cpu','gpu','ram','powerSupply','motherboard','cpuCooler','hardDrive','SSD','M.2','case']},
    price: {type: Number, required: true},
    name: {type: String, required: true, maxLength: 50},
    company: {type: String, required: true, maxLength: 50}
})