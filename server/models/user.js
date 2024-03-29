const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  documents: {
    type: Array,
  },
  tags: {
    type: Array,
  }
});

module.exports = mongoose.model("user", userschema);
