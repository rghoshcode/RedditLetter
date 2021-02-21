const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');
const usersRoutes = require("./routes/users");
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());


app.use('/users', usersRoutes);


mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true},
    ()=> {
    console.log('connected to db');
    }
);

// Send message for default URL
app.get('/', (req, res) => res.send('Welcome to the RedditLetter API'));

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RedditLetter API on port " + port);
});

