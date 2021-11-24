const mongoose = require('mongoose')
const Schema = mongoose.Schema

let CategorySchema = new Schema({
    name: {
        type : String,
        required : true
    },
    products: {
        type : [mongoose.SchemaType.ObjectId],
        ref:'Product'
    },
    family_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Family'
    }
})

module.exports = mongoose.model('Category', CategorySchema)