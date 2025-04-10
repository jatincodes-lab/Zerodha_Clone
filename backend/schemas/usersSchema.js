const { Schema } = require("mongoose");
const bcrypt = require( 'bcryptjs');

const usersSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

usersSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});
module.exports = usersSchema;
