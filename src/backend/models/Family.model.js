const mongoose = require('mongoose')
const Schema = mongoose.Schema

let familySchema = new Schema({
    name: {
        type : String,
        required : true
    },
    categories: {
        type : [mongoose.Schema.Types.ObjectId],
        ref:'Category',
        required : true
    },
    columns: {
        type: [String],
        required : true
    },
})

module.exports = mongoose.model('Family', familySchema)