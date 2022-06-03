const tasks = require("./routes/tasks");
const users = require("./routes/users");
const connection = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();

connection();

app.use(express.json());
app.use(cors());

app.use("/api/tasks", tasks);
app.use("/api/users", users);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port: ${port}...`));