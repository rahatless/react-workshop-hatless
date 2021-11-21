const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({});

module.exports = mongoose.model("User", userSchema);
