import mongoose from "mongoose";

const schema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  name: { type: String },
  email: { type: String },
  avatar: { type: String },
});

const profile = mongoose.model("profile", schema);

export default profile;
