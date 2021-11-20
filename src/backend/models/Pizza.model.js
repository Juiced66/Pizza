const mongoose = require('mongoose')
const Schema = mongoose.Schema

let PizzaSchema = new Schema({
    name: !String,
    payload: ![String],
    prices: ![Float32Array],
    img: String ,
})

module.exports = mongoose.model('Pizza', PizzaSchema)