// Required Libraries
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Import Routes
const productRoutes = require('./routes/productRoutes');

// Initialize Express App
const app = express();

// Middleware
app.use(cors());                      
app.use(express.json());               

// Database Connection
const MONGO_URI = 'mongodb+srv://amasalbekov12:adilet123@cluster0.mkeya4h.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp';
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully!'))
    .catch(err => console.log(err));

// Routes
app.get('/', (req, res) => {         
    res.json({ message: "Welcome to DressStore application." });
});

app.use('/api', productRoutes);    

// Start Server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
