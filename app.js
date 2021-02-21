const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');
const usersRoutes = require("./routes/users");
const port = process.env.PORT;
const sgMail = require('@sendgrid/mail');
const SG_API_KEY = process.env.SENDGRID_API_KEY;
const User = require('./models/User');

app.use(cors());
app.use(bodyParser.json());
app.use('/users', usersRoutes);

mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser : true },
    ()=>{
        console.log('connected to db');
    },
);

let allUsers = [];

(async function(){
    allUsers = await User.find();
    console.log(allUsers);
})();

app.listen(port, function(){
    console.log("Running RedditLetter API on port " + port);

});

sgMail.setApiKey(SG_API_KEY);
const mailBody = {
    from : 'ranajoy121@gmail.com',
    to : allUsers.map(u=>u.email),
    subject : 'Daily Reddit Digest',
    html : '',
};

//SENDING OUT AN EMAIL TO EACH USER
sgMail.send(mailBody).then(res=>console.log('Email sent', res)).catch(err=>console.log(err.message));






