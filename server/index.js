// // mongoose, dotenv, cors, express, nodemon
// //imports
// const express = require('express')


// //configurations
// const app= express()
//const port= 3002
// app.use(express.json())


// //endpoints
// app.get('/', (req, res) => {
//     res.send('hello milton')
// })

// app.get('/user', (req, res)=> {
//     res.json({name : "milton", location:"allahabad"})
// })



// IMPORTS
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

//CONFIGURATIONS
const app = express()
dotenv.config();
app.use(express.json())
app.use(cors());
app.use('/',userRoutes)

app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// CONNECT TO DB
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('Connected to DB'))
.catch(e => console.log(e.message))

 
//start the server
 app.listen(PORT, () => {
     console.log(`example of log ${PORT}`)
 })        