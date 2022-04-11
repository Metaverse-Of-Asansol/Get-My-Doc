const mongoose = require("mongoose");

const documentschema = new mongoose.Schema({
  docId: {
    type: String,
  },
  docTitle: {
    type: String,
    required: true,
  },
  docLink: {
    type: String,
  },
  docTags: {
    type: String,
    required: true,
  },
  additionalInfo: {
    type: String,
  },
});

module.exports = mongoose.model("docs", documentschema);
