require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const beansRouter = require("./routes/beans");
const cartRouter = require("./routes/shoppingCart");
const orderRouter = require("./routes/orderHistory");
const userRouter = require("./routes/users");

const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/api/beans", beansRouter);
app.use("/shoppingcart", cartRouter);
app.use("/orderhistory", orderRouter);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-lhhov.mongodb.net/airbean?retryWrites=true&w=majority`,
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
