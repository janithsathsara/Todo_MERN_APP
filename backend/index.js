require("dotenv").config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());
// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true/*, useUnifiedTopology: true*/ });
const db = mongoose.connection;

// Define a schema for the data
const dataSchema = new mongoose.Schema({
    // id: Number,
    title: String,
    description: String,
});

// Create a model based on the schema
const Data = mongoose.model('Data', dataSchema);

app.use(express.json());

// Create
app.post('/TasksData', async (req, res) => {
    const { title, description } = req.body;
    const newData = new Data({ title, description });

    try {
        const savedData = await newData.save();
        res.json(savedData);
    } catch (error) {
        res.status(500).json({ error: 'Error saving data' });
    }
});

// Read
app.get('/TasksData', async (req, res) => {
    const id = req.params;

    try {
        const data = await Data.find();
        if (!data) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving data' });
    }
});

app.get('/TasksData/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const data = await Data.findOne({ _id: id });
        if (!data) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving data' });
    }
});

// Delete
app.delete('/TasksData/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const deletedData = await Data.deleteOne({ _id: id });
        if (!deletedData) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.json(deletedData);
    } catch (error) {
        res.status(500).json({ error: 'Error deleting data' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
