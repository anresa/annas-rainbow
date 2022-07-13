import mongoose from "mongoose";
export const UserSchema = new mongoose.Schema({
  nickName: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});
