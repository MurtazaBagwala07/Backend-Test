require("dotenv").config();
const express = require("express");

const app = express();
const port = 3000;

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});

const exampleJson = { name: "John", age: 30, car: null };

app.get("/", (req, res) => {
  res.send("Hola Amigo");
});

app.get("/json", (req, res) => {
  res.json(exampleJson);
});
