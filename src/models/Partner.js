const mongoose = require("mongoose");

const PartnerSchema = new mongoose.Schema({
  name: String,
  email: String,
});

module.exports = mongoose.model("Partner", PartnerSchema);
