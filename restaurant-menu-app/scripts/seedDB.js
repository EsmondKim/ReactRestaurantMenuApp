const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/restaurantmenuapp",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

const menuSeed = [
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

db.Menu.remove({})
  .then(() => db.Menu.collection.insertMany(menuSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
