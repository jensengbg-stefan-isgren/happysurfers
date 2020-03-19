const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const beansRouter = require("./routes/beans");
const cartRouter = require("./routes/shoppingCart");

const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());
app.use("/api/beans", beansRouter);
app.use("/shoppingcart", cartRouter);

mongoose
  .connect(
    "mongodb+srv://admin:Kungen1982@cluster0-lhhov.mongodb.net/airbean?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  )
  .then(() => {
    console.log("connected to databaase");
  });

app.listen(5000, () => console.log(`Server started on port ${PORT}`));
