import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 2,
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    viewed: Number,
    impressions: Number,
  },
  { timestamps: true }
);

const User = model("User", UserSchema);
export default User;
