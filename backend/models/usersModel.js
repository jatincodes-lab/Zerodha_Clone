const usersSchema  = require("../schemas/usersSchema.js");
const { model } = require("mongoose");

const userModel = model("user", usersSchema);

module.exports = userModel;