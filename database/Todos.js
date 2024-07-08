let mongoose = require('mongoose')

require('dotenv').config()
async function connection(){
    try{
        await mongoose.connect(process.env.URL, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log("connected Todos DB")
    }catch(err){
        console.log(err)
    }
}
connection()
let Schema = mongoose.Schema

let todosschema = new Schema({
    name:String,
    title:String,
    description:String,
    done:{type:String, default: "false"},
    userId:String
})

let Todo = mongoose.model('Todo', todosschema)
module.exports = Todo