const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({});

module.exports = mongoose.model("Room", roomSchema);
