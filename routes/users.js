let express = require('express');
let router = express.Router();
const User = require('../models/User');

//GET ALL USERS
router.get('/', async (req, res)=>{
    try {
        const users = await User.find();
        await res.json(users);
    } catch (err) {
        await res.json({ message : err });
    }
});

//ADD A NEW USER
router.post('/', async (req, res)=>{
    const user = new User({
        userName : req.body.userName,
        password : req.body.password,
        email : req.body.email,
        subscriptionStatus : req.body.subscriptionStatus,
        favoritSubreddits : req.body.favoritSubreddits,
    })

    try {
        const savedUser = await user.save();
        await res.json(savedUser);
    } catch (err) {
        await res.json({ message : err });
    }
});

//UPDATE AN USER's SUBSCRIPTION STATUS
router.patch('/:userName', async (req, res)=>{
    console.log(req);
    try {
        const updatedUser = await User.updateOne( {userName : req.params.userName},
            {$set : {subscriptionStatus: req.body.subscriptionStatus}});
        await res.json(updatedUser);
    } catch (err) {
        await res.json({ message : err });
    }
});

//UPDATE AN USER's SUBREDDITS
router.patch('/:userName/favorites', async (req, res)=>{
    console.log(req);
    try {
        const updatedUser = await User.updateOne( {userName : req.params.userName},
            {$set : {favoritSubreddits : req.body.favoritSubreddits}});
        await res.json(updatedUser);
    } catch (err) {
        await res.json({ message : err });
    }
});

// Export API routes
module.exports = router;