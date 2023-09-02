// schema files always be singular
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    category: String,
    color: Array,
    company: String,
    price: { type: Number, Int32: true },
})
export const Product = mongoose.models.products || mongoose.model("products", productSchema);//table name