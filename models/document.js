const mongoose = require("mongoose");

const documentschema = new mongoose.Schema({
  docId: {
    type: String,
  },
  docTitle: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  docLink: {
    type: String,
    required: true,
  },
  docTags: {
    type: String,
  },
  additionalInfo: {
    type: String,
  },
});

module.exports = mongoose.model("docs", documentschema);
