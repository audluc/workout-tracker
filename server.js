//linking to express and mongoose. Localhost
const express = require("express");
const mongoose = require("mongoose");
const PORT = 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));

app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));
db.once("open", function () {
  console.log("console log connected to mongo");
  app.listen(PORT, function () {
    console.log("we are running on port " + PORT);
  });
});
