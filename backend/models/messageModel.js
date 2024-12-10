const mongoose = require("mongoose");
const mongooseModel = mongoose.Schema(
  {
    sender: {
      type: mongoose > mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      trim: true,
    },
    chat: {
      types: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    timeStamps: true,
  }
);
const Message = mongoose.model("Message", messageModel);
module.exports = Message;
