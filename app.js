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
const getHTML = require('./getHTML');

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


//SENDING OUT AN EMAIL TO EACH USER
const now = new Date();
let millisTill8 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 0, 0, 0) - now;
if (millisTill8 < 0) {
    millisTill8 += 86400000; // it's after 8am, try 8am on the next day.
}
setTimeout(function(){

    allUsers.forEach(user=>{
        const mailBody = {
            from : 'ranajoy121@gmail.com',
            to : user.email,
            subject : 'Daily Reddit Digest',
            html : getHTML.getHTML(user),
        };
        //SEND OUT THE EMAIL TO THE SPECIFIC USER
        sgMail.send(mailBody).then(res=>console.log('Email sent', res)).catch(err=>console.log(err.message));

    })


}, millisTill8);









