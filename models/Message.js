// ✅ FILE: backend/models/Message.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const MessageSchema = new Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  text: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model("messages", MessageSchema);