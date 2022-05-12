const express = require("express");
const bodyParser = require("body-parser"); 
const cors = require("cors");
const userRouter = require("./controller/user-controller");
const recipeRouter = require("./controller/recipe-controller");
const ingredientRouter = require("./controller/ingredient-controller");
const measureUnitsRouter = require("./controller/measure_units-controller");

const app = express();
const port = 4000;

app.set("view engine", "ejs")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))

//jednoduchá definice routy s HTTP metodou GET, která pouze navrací text
app.get("/", (req, res) => {
  res.send('Hello World!')
});

//nastavení portu, na kterém má běžet HTTP server
app.listen(port, () => {
  console.log(`App starts at http://localhost:${port}`)
});

// Routery
app.use("/user", userRouter);
app.use("/recipes", recipeRouter);
app.use("/ingredients", ingredientRouter);
app.use("/measure_units", measureUnitsRouter);

