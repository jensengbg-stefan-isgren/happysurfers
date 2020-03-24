
const mongoose = require("mongoose");
mongoose.pluralize(null);
const historySchema = require("../model/historyModel");
const orderHistory = mongoose.model("orderhistory", historySchema);


let dateFormat = () => {
  let today = new Date();
  let dd = today.getDate();

  let mm = today.getMonth() + 1;
  const yyyy = today
    .getFullYear()
    .toString()
    .substr(-2);
  if (dd < 10) {
    dd = `0${dd}`;
  }

  if (mm < 10) {
    mm = `0${mm}`;
  }
  let date = `${yyyy}/${mm}/${dd}`;
  return date;
};

let timeToDelivery = () => {
  let distance = Math.floor(Math.random() * 20) + 1;
  let droneSpeed = 80;

  let time = (distance / droneSpeed) * 60;
  time = Math.round(time);
  return time;
};

function generateOrderNr() {
  let letters = ["X", "Y", "Z"];
  return `AB${Date.now()}${
    letters[Math.floor(Math.random() * letters.length)]
  }`;
}

exports.showOrderHistory = async (request, response) => {
  let history = await orderHistory.find();
  response.send(history);
};

exports.saveOrder = async (request, response) => {
  console.log(request.body);
  response.send(request.body);
};

exports.sendOrder = async (request, response) => {
  let orderedItems = request.body;
  let priceArray = orderedItems.map(item => item.price * item.quantity);
  let totalPrice = priceArray.reduce((acc, curr) => acc + curr);
  let obj = new orderHistory({
    timestamp: dateFormat(),
    orderNumber: generateOrderNr(),
    items: request.body,
    totalValue: totalPrice,
    eta: 1
  });

  obj
    .save()
    .then(doc => {
      // console.log(doc);
    })
    .catch(error => {
      // console.log(error);
    });

  // const order = {
  //   date: dateFormat(),
  //   eta: timeToDelivery(),
  //   orderNr: generateOrderNr(),
  //   orderItems: orderedItems
  // };

  setTimeout(() => {
    response.send(obj);
  }, 2000);
};
