
import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true,
  },
  companyName: {
    type: String,
    required: true,
    trim: true,
  },
  iconUrl: {
    type: String,
    trim: true,
  },
  lastDayTradedPrice: {
    type: Number,
    required: true,
    min: 0,
  },
  currentPrice: {
    type: Number,
    required: true,
    min: 0,
  },
  dayTimeSeries: {
    type: [mongoose.Schema.Types.Mixed],
    default: [],
  },
  tenMinTimeSeries: {
    type: [mongoose.Schema.Types.Mixed],
    default: [],
  },
}, {
  timestamps: true,
});

const Stock = mongoose.model("Stock", stockSchema);

export default Stock;
