const mongoose = require("mongoose");

const uri = "mongodb+srv://admin:dn1SFzYubDtRmtfF@clustertomas.4x4dr.mongodb.net/?retryWrites=true&w=majority";

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(
            uri,
            connectionParams
        );
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};