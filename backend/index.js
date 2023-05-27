// index.js

const express = require("express");
const app = express();
const db = require("./db");
const apiRouter = require("./api");

app.use(express.json());

app.use("/api", apiRouter);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
