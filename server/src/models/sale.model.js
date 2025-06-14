import mongoose from "mongoose";

const saleSchema = new mongoose.Schema({
  title: String,
  price: Number,
  status: String,
  buyer: String,
  createdAt: { type: Date, default: Date.now },
});
export default mongoose.model("Sale", saleSchema);
