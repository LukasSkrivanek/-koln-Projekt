const express = require("express");
const app = express();
const port = 4000;

app.set("view engine", "ejs")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRouter = require("./controller/user-controller");

//jednoduchá definice routy s HTTP metodou GET, která pouze navrací text
app.get("/", (req, res) => {
  res.send('Hello World!')
});

//nastavení portu, na kterém má běžet HTTP server
app.listen(port, () => {
  console.log(`App starts at http://localhost:${port}`)
});

app.use("/user", userRouter);

