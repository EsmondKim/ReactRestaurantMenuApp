const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  item: { type: String, required: true },
  price: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
