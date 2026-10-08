import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address.",
    ],
  },
  password: {
    type: String,
    minlength: 8,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50,
  },
  login_pin: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 6,
    match: [/^\d+$/, "PIN must contain only digits."],
  },
  phone_number: {
    type: String,
    required: true,
    unique: true,
    match: [/^\d{10}$/, "Phone number must contain exactly 10 digits."],
  },
  date_of_birth: {
    type: Date,
    required: true,
  },
  biometricKey: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "other"],
  },
  wrong_pin_attempt: {
    type: Number,
    default: 0,
    min: 0,
  },
  block_until_pin: {
    type: Date,
    default: null,
  },
  balance: {
    type: Number,
    default: 5000,
    min: 0,
  },
}, {
  timestamps: true,
});

const User = mongoose.model("User", userSchema);

export default User;
