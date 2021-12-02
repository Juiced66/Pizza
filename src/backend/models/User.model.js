const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

let userSchema = new Schema({
    email: {
        type : String,
        required : true,
        unique:true
    },
    password: {
        type: String,
        required : true
    },
})
userSchema.methods.matchPassword = async function (enteredPassword){
   return await bcrypt.compare(enteredPassword, this.password)

}
userSchema.pre('save', async function(next){

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

module.exports = mongoose.model('User', userSchema )