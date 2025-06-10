import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
  title: String,
  price: Number,
  status: String,
  buyer: String,
  createdAt: { type: Date, default: Date.now },
});
export default mongoose.model("Purchase", purchaseSchema);
