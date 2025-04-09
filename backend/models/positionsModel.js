const {model} = require('mongoose');
const positionsSchema = require('../schemas/postitionsSchema');

const positionsModel = model("position", positionsSchema);

module.exports = positionsModel;