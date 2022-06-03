const mongoose = require("mongoose");

const uri = "mongodb+srv://admin:dn1SFzYubDtRmtfF@clustertomas.4x4dr.mongodb.net/?retryWrites=true&w=majority";
//const uri = "mongodb+srv://@clustertomas.4x4dr.mongodb.net/?retryWrites=true&w=majority";

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            //useCreateIndex: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(
            uri,//"mongodb://localhost/todo-app",
            connectionParams
        );
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};