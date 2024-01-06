import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("listening on port " + port);
});

const exampleJson = { name: "John", age: 30, car: null };

app.get("/", (req, res) => {
  res.send("Hola Amigo");
});

app.get("/json", (req, res) => {
  res.json(exampleJson);
});
