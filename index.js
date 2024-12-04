const express = require("express");
const router = require("./router");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const PORT = 8000;

const app = express();

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});

var corsOptions = {
  origin: "*",
  credentials: true,
};

app.use(cors(corsOptions));

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}
app.use(allowCrossDomain);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(router);

mongoose
  .connect('mongodb+srv://katsitadzez:Z23NYfXNELfVSjBq@flyinspectors.38j7l.mongodb.net/?retryWrites=true&w=majority&appName=flyinspectors', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
