const mongoose = require("mongoose");

const uri = "mongodb+srv://admin:dn1SFzYubDtRmtfF@clustertomas.4x4dr.mongodb.net/?retryWrites=true&w=majority";
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://admin:<password>@clustertomas.4x4dr.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
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