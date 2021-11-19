const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  item: { type: String },
  description: { type: String },
  price: { type: String },
  details: { type: String },
  date: { type: Date, default: Date.now },
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
