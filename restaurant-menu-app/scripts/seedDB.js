const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Restaurant collection and inserts the delicious menu items below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/restaurantmenuapp"
);

const orderSeed = [
  {
    item: "Brie Butt Burger",
    description:
      "A burger that's guaranteed to give you a Brie-like mudd-butt. Ya heard??",
    price: "$15.99",
    details: "Lactose Free",
    date: new Date(Date.now()),
  },
  {
    item: "Booty Burger",
    description: "This burger is booty son!",
    price: "$15.99",
    details: "Gluten Free",
    date: new Date(Date.now()),
  },
  {
    item: "Burger-Burger, Jr.",
    description: "A slider-slider combo inspired by the Whopper, Jr.",
    price: "$12.99",
    details: "",
    date: new Date(Date.now()),
  },
  {
    item: "Brontasauras Burger",
    description: "This burger is made of endangered species.",
    price: "$99.99",
    details: "Kobe certified",
    date: new Date(Date.now()),
  },
];

db.Order.remove({})
  .then(() => db.Order.collection.insertMany(orderSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
