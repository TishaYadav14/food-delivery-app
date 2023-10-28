const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const port = 3005;
app.use(cors());
const dishes = require("./routes/dishRoutes");



app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/fooddelivery');
// mongoose.connect("mongodb://localhost:27017/fooddelivery");
console.log("Connected to MongoDB");

app.use("/api", dishes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});