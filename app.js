const express = require("express");
const bodyParser = require("body-parser");
const UserRoute = require("./routes/user_routes");
const TodoRoute = require("./routes/todo_routes");

const app = express();

app.use(bodyParser.json());

app.use('/',UserRoute);
app.use('/',TodoRoute);

module.exports = app;