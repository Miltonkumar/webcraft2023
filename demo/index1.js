// console.log("hello1")

//const exp= require()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const mongoose= require('mongoose')
const dotenv= require('dotenv') 
dotenv.config()
const port=process.env.PORT || 3005;
mongoose.connect(process.env.MONGO_URL).then(()=> console.log('Connected to DB')).catch(e=>console.log(e.message))

const userRouter = require('./router/userRoutes');
//app.use('/',userRouter);
// respond with "hello world" when a GET request is made to the homepage
// app.get('/', (req, res) => {
//   res.send('hello world') 
// })
app.set('view engine','ejs')
app.use(express.static('views'))
app.use(bodyParser.urlencoded({ extended: false }))


// parse application/json
app.use(bodyParser.json())
app.use(express.json())
app.use('/',userRouter); 
 
app.listen(port,()=>{
    console.log("hello app launched")
}) 