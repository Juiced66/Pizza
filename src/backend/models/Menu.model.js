const mongoose = require('mongoose')
const Schema = mongoose.Schema

let menuSchema = new Schema({
    name: {
        type : String,
        required : true
    },
    families: {
        type : [mongoose.SchemaType.ObjectId],
        ref:'Family',
        required: true
    },
    columns: {
        type: [String],
        required : true
    },
})

module.exports = mongoose.model('Menu', menuSchema)