// require('dotenv').config;
const result = require('dotenv').config();
console.log("Dotenv lie detector: ", result);

// solves querysrv error
const dns = require('dns');
dns.setServers(['1.1.1.1', '8.8.8.8']);

// import user blue print
const User = require('./models/User');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

console.log("My Mongo URL is:", process.env.MONGO_URI);
// databaseconnection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Successfully connected to mongodb"))
    .catch((err) => console.error("Database Connection error:" ,err));

// routes

// sign up route
app.post('/api/signup', async (req, res) => {
    
});

// sign in route
app.post('/api/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        // find user in Database
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: "User not found" });

        // check password using bcrypt
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: "Invalid password" });

        // if everything is correct generate JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ message: "Login successful", token });
    } catch (err) {
        res.status(500).json({ error: "Login failed" });
    }
});

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
});