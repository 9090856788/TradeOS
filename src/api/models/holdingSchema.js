import mongoose from "mongoose";

const holdingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  stock: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Stock",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  buyPrice: {
    type: Number,
    required: true,
    min: 0,
  },
});

const Holding = mongoose.model("Holding", holdingSchema);

export default Holding;
