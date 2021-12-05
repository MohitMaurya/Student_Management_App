const express = require('express');
const app = express();
const connect = require("./src/config/db");
const userContoller = require("./src/controllers/user.controller");
const contestController = require("./src/controllers/contest.controller");

app.use(express.json());

app.use('/users', userContoller);
app.use('/contests', contestController);

app.listen(6666, async () => {
    await connect();
    console.log("Listening to port 6666");
})