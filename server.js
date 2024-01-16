const express = require('express');
const connectToDb = require('./config/connectToDB');
const { errorHandler, notFound } = require("./middlewares/error");
require('dotenv').config();

// Connection To Db
connectToDb();

// Init App
const app = express();

// Middlewares
app.use(express.json())

// Eroor Handler MIddleware
app.use(notFound);
app.use(errorHandler);

// Running The Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);