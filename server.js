// import Module
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const colors = require("colors");
dotenv.config({ path: "./config/config.env" });
require("./config/db");

const app = express();

// fix access to back-end
app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", process.env.FRONTEND_APP_HOST);

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

//body Parser
app.use(express.json());

// implement req logger for development mood
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// start server Configuration
const PORT = process.env.PORT || 5000;
const server = app.listen(
  PORT,
  console.log(
    `we are in ${process.env.NODE_ENV} mood and port is ${process.env.PORT}`
      .yellow.bold
  )
);

//unhandled process problem
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error : ${err.message}`.red);
  server.close(() => process.exit(1));
});
