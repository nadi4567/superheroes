import express from "express";
import superheroes from "superheroes";
import generateName from "sillyname";
const app = express();
const port = 3000;


app.get("/", (req, res) => {
  let name = superheroes.random();
  let sillyName = generateName();
  res.send(`<h1>Behold, I am ${name}! and My sillyname is ${sillyName}</h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
