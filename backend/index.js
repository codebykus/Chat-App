const express = require("express");
const { chats } = require("./data/data");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.get("/", (req, res) => {
  res.send("API is running sucessfully");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});
const PORT = process.env.PORT || 5000;
app.listen(console.log(`Server is running on port ${PORT}`));
