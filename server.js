const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const transactions = require("./routes/transaction");

const app = express();

app.use(express.json());

app.use("/api/v1/transactions", transactions);

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(
    `${process.env.NODE_ENV} server running on port ${PORT}`.yellow.bold
  )
);
