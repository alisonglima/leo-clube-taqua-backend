const mongoose = require("mongoose");

const DebtSchema = new mongoose.Schema({
  name: String,
  value: Number,
  partner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Partner",
  },
});

module.exports = mongoose.model("Debt", DebtSchema);
