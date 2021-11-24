const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  payload: {
    type: [String],
    required: true,
  },
  prices: {
    type: [Number],
    required: true,
  },
  img: String,
  _category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",  
  },
});

module.exports = mongoose.model("Product", ProductSchema);
