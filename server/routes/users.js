const User = require("../models/user");
const express = require("express");
const router = express.Router();

// Register
router.post("/register", async (req, res) => {
    try {
        // Possible user password hashing      
        console.log("userRegister post",req.body); 
        const user = await new User(req.body).save();
        res.send(user);
    } catch (error) {
        res.send(error);
    }
});

router.post("/login", async (req, res) => {
    try {
        // Possible user password hashing
        console.log("userLogin post",req.body);
        const users = await User.find(req.body);                
        
        if(users.length === 1){//found user
            res.send(users[0]);
        }
        else{
            res.send(401, 'user not found!');
        }        
    } catch (error) {
        res.send(error);
    }
});


module.exports = router;