import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  nickName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

export const UserSchema = new mongoose.Schema({
  // add data structure
});
