require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello ji, coffee le lo ji");
});
app.get("/instagram", (req, res) => {
  res.send("Hello ji, Welcome to instagram");
});
app.get("/login", (req, res) => {
  res.send("<h1>Chirag Arya(aryachira11): logged in</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h2>Coffee aur code</h2>");
});
app.listen(port, () => {
  console.log(`MyApp is listening on port ${port}`);
});
