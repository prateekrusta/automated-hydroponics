const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const errorHandler = require('./errors/errorHandler');
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');
dotenv.config()

const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors(corsOptions));

// Cross Origin middleware
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000/");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
})

// mongoose.connect('mongodb+srv://prateekrusta:prateeki2001@hydroponics.sqjm1f6.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/auth', authRoutes);

app.use(errorHandler);

mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(8000, () => {
            console.log(`Server started on port: ${port}`);
        });
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });