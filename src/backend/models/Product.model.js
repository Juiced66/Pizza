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
    type: [Float32Array],
    required: true,
  },
  img: String,
  category_id: {
    type: mongoose.SchemaType.ObjectId,
    ref: "Category",
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
