const mongoose = require("mongoose");

const drinksSchema = mongoose.Schema({
  name: String,
  price: Number,
  stock: Boolean,
  caffeine: Boolean,
  volume: Number,
  description: String,
});

const Drinks = mongoose.model("Drinks", drinksSchema);

module.exports = Drinks;
