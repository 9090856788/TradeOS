import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
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
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  type: {
    type: String,
    required: true,
    enum: ["buy", "sell"],
  },
  remainingBalance: {
    type: Number,
    set: value => value == null ? value : Number(Number(value).toFixed(2)),
  },
}, {
  timestamps: true,
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
