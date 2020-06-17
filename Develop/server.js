const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

// const user = require("./model.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// process.env.MONGODB_URI || 
mongoose.connect("mongodb://localhost/workout", 
{ 
    useNewUrlParser: true, 
    useFindAndModify: true
});

app.use(require("./routes/api_routes"))
app.use(require("./routes/html_routes"))


// handles submit query to add workouts to db via routing folder

  
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  