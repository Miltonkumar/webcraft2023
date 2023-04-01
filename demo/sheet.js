// Require necessary modules
const express = require('express')
const app1 = express()
const bodyParser = require('body-parser')

const mongoose= require('mongoose')
const dotenv= require('dotenv')
dotenv.config()
const port=process.env.PORT || 3005;
mongoose.connect(process.env.MONGO_URL).then(()=> console.log('Connected to DB')).catch(e=>console.log(e.message))

// Define Mongoose schema for the checkbox data
const checkboxSchema = new mongoose.Schema({
    option1: Boolean,
    option2: Boolean,
    option3: Boolean
});

// Define Mongoose model for the checkbox data
const Checkbox = mongoose.model('Checkbox', checkboxSchema);

// Create Express server
//const app1 = express();

// Middleware to parse JSON requests
app1.use(express.json());

// Route to serve the front-end HTML file
app1.get('/', (req, res) => {
    res.sendFile(__dirname + '/checkbox.html');
});

// Route to handle checkbox data submission
app1.post('/checkbox', async (req, res) => {
    try {
        const { option1, option2, option3 } = req.body;

        // Create a new instance of the Checkbox model with the submitted data
        const newCheckbox = new Checkbox({
            option1,
            option2,
            option3
        });

        // Save the new checkbox data to the database
        const savedCheckbox = await newCheckbox.save();

        res.status(200).json(savedCheckbox);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Start server
app1.listen(port, () => console.log('Server started on port 3000'));