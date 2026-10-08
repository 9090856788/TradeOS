import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { mailSender } from "../services/mailSender";

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address.",
    ],
  },
  otp: {
    type: String,
    required: true,
    match: [/^\d{6}$/, "OTP must contain exactly 6 digits."],
  },
  otpType: {
    type: String,
    required: true,
    enum: ["phone", "email", "reset_password", "reset_pin"],
  },
}, {
  timestamps: { createdAt: true, updatedAt: false },
});

otpSchema.index({ createdAt: 1 }, { expireAfterSeconds: 60 * 5 });

otpSchema.pre("save", async function (next) {
  if (this.isNew) {
    const salt = await bcrypt.genSalt(10);
    await sendVerificationMail(this.email, this.otp, this.otp_type);
    this.otp = await bcrypt.hash(this.otp, salt);
  }
  next();
});

otpSchema.methods.compareOtp = async function (inputOtp) {
  return await bcrypt.compare(inputOtp, this.otp);
};

async function sendVerificationMail(email, otp, otp_type) {
  try {
    const mailResponse = await mailSender(email, otp, otp_type);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

const Otp = mongoose.model("OTP", otpSchema);

export default Otp;
