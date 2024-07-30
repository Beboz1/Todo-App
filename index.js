let express = require('express')
let bodyParser = require('body-parser')
let User = require('./database/User.js')
let Todo = require('./database/Todos.js')
let cors = require('cors')
let app = express()
let path = require('path')



let Username
let Id
app.use(cors())
app.set('views', (__dirname, 'views'))
app.set('view engine', 'ejs')


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(__dirname + "/public"))
app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html")
})





//save checkboxes
app.post("/check/:todo/:_id/:cond", async(req, res)=>{
    let number = req.params.todo
    let id = req.params._id
    let cond = req.params.cond
    console.log(number + " " + id + " " + cond)
    let data = await Todo.find({userId:id})
    let description = data[number].description

    async function update(){
        await Todo.findOneAndUpdate({description:description}, {done:cond})
        let data2 = await Todo.find({userId:id})
        console.log(data2)
        res.redirect("/users/"+req.params._id)
    }
    update()
    
})
//make a new user form
app.post("/newUser", async(req, res)=>{
    let user = new User({
        name:req.body.name
    })
    user.save()
    res.redirect("/users/"+user._id)
})
//redirect to new user form
app.post("/signup", async(req, res)=>{
    res.sendFile(__dirname + "/views/account.html")
})
//show him the form
app.post("/newTodo", async(req, res)=>{
    res.sendFile(__dirname + "/views/newtodo.html")
})
//signin form
app.post("/signin", async(req, res)=>{
    res.sendFile(__dirname + "/views/signinForm.html")
})
//redirect to signin form
app.post("/signedin", async(req, res)=>{
    res.redirect("/users/"+req.body.data)
})
//save the todo
app.post("/todoForm", async(req, res)=>{
    let todo = new Todo({
        name: Username,
        title: req.body.title,
        description: req.body.description,
        done:false,
        userId:Id
    })
    todo.save()
    res.redirect("/users/"+Id)
})














//main page
app.get("/users/:_id", async(req, res)=>{
    if(req.params._id.length != 24){
        res.redirect("/")
    }
    else{
        let user = await User.findById(req.params._id)
        Username = user.name
        Id = user._id
        let data = await Todo.find({userId:Id})
        res.render("main", {
            name: Username,
            id: Id,
            data: data
        })
    }
    
})
app.listen(process.env.PORT, ()=>{
    console.log("App is listening on port 3000")
})
module.exports = Username