let mongoose = require('mongoose')

require('dotenv').config()
async function connection(){
    try{
        await mongoose.connect(process.env.URL, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log("connected User DB")
    }catch(err){
        console.log(err)
    }
}
connection()
let Schema = mongoose.Schema

let userschema = new Schema({
    name:String
})

let User = mongoose.model('User', userschema)
module.exports = User