const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,        
    },   
    // token: {
    //     type: String,        
    // },
});

module.exports = mongoose.model("user", userSchema);